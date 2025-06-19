import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { CoreButtonComponent } from '../../../../components/button/button.component';
import { MainSpinnerComponent } from "../../../../components/main-spinner/main-spinner.component";
import { PersonService } from '../../../../services/person/person.service';
import { ToastService } from '../../../../services/toast/toast.service';
import { IApartmentToList } from '../../../../services/apartment/types';
import { ApartmentService } from '../../../../services/apartment/apartment.service';
import { TowerService } from '../../../../services/tower/tower.service';
import { PersonCategory } from '../../../../services/person/types';
@Component({
  selector: 'app-add-residents-modal',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, NgxMaskDirective, CoreButtonComponent, MainSpinnerComponent],
  templateUrl: './add-residents-modal.component.html',
  styleUrl: './add-residents-modal.component.css'
})
export class AddResidentsModalComponent implements OnInit {

  residentForm!: FormGroup;
  constructor(private fb: FormBuilder, private personService: PersonService, private toastService: ToastService, private towerService: TowerService, private apartmentService: ApartmentService) { }

  @Output() close = new EventEmitter<void>();
  @Output() residentUpdated = new EventEmitter<void>();
  apartments: IApartmentToList[] = [];
  categories: PersonCategory[] = ['RESIDENT', 'VISITOR'];
  selectedApartmentId: number | null = null;
  selectedCategory: PersonCategory = 'RESIDENT';

  isLoading: boolean = false;

  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    try {
      this.setupForm();
      await this.getApartments();
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }


  async getApartments(): Promise<void> {
    const apartmentResult = await this.apartmentService.getAll(9999);
    this.apartments = apartmentResult.content;
    this.selectedApartmentId = this.apartments[0].id;
  }


  onSelectApartmentChange($event: Event) {
    const selectedId = Number(($event.target as HTMLSelectElement).value);
    console.log(selectedId);
    this.selectedApartmentId = selectedId;
  }

  onSelectCategoryChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as PersonCategory;
    this.selectedCategory = value;
  }
  setupForm(): void {
    this.residentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{2}9\d{8}$/)]],
      birthDate: ['', Validators.required],
      cpf: ['', Validators.required]
    });
  }

  async onSubmit(): Promise<void> {
    try {
      this.isLoading = true;
      const formData = this.residentForm.value;
      await this.personService.insert({
        cpf: formData.cpf,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        birthDate: formData.birthDate,
        category: this.selectedCategory,
        apartmentId: this.selectedApartmentId
      });
      this.residentUpdated.emit();
      this.toastService.show('success', 'Sucesso!', 'Morador registrado com Sucesso!');
    } catch (e: any) {
      console.error(e);
      this.toastService.show('error', 'Algo deu errado!', e.message);
    } finally {
      this.isLoading = false;
      this.onClose();
    }
  }

  getCategoryTranslation(value: PersonCategory) {
    if(value === 'RESIDENT') return 'MORADOR';
    if(value === 'VISITOR') return 'VISITANTE';
    return 'Categoria não mapeada';
  }


  isEnabledToSubmitForm(): boolean {
    return !this.residentForm.invalid && this.selectedCategory != null && this.selectedApartmentId != null;
  }

  onClose() {
    this.close.emit();
  }
}
