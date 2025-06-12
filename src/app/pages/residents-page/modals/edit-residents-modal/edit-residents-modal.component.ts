import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { PersonService } from '../../../../services/person/person.service';
import { ToastService } from '../../../../services/toast/toast.service';
import { CoreButtonComponent } from '../../../../components/button/button.component';
import { MainSpinnerComponent } from '../../../../components/main-spinner/main-spinner.component';
import { NgxMaskDirective } from 'ngx-mask';
import { IPerson } from '../../../../services/person/types';

@Component({
  selector: 'app-edit-residents-modal',
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective, CoreButtonComponent, MainSpinnerComponent],
  templateUrl: './edit-residents-modal.component.html',
  styleUrl: './edit-residents-modal.component.css'
})
export class EditResidentsModalComponent implements OnInit {

  condominioForm!: FormGroup;
  constructor(private fb: FormBuilder, private personService: PersonService, private toastService: ToastService) { }

  @Output() close = new EventEmitter<void>();
  @Output() residentUpdated = new EventEmitter<void>();
  @Input() selectedResidentId: number | null = null;

  isLoading: boolean = false;

  async ngOnInit() {
    this.isLoading = true
    
    this.condominioForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{2}9\d{8}$/)]],
      birthDate: ['', Validators.required],
      cpf: ['', Validators.required]
    });

    const data: IPerson | null = await this.getPerson();
    if (data) {
      this.condominioForm.patchValue(data);
    }

    this.isLoading = false;
  }
  async getPerson(): Promise<IPerson | null> {
    if (this.selectedResidentId == null) return null;
    try {
      const data: IPerson = await this.personService.getById(this.selectedResidentId);
      return data;
    } catch (ex: any) {
      console.error('Erro ao buscar pessoa:', ex);
      return null;
    }
  }


  async onSubmit(): Promise<void> {
    if(this.selectedResidentId == null) return;
    try {
      this.isLoading = true;
      const formData = this.condominioForm.value;
      await this.personService.update({
        id: this.selectedResidentId,
        cpf: formData.cpf,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        birthDate: formData.birthDate
      });
      this.residentUpdated.emit();
      this.toastService.show('success', 'Sucesso!', 'Dados do Morador foram atualizados com Sucesso!');
    } catch (e: any) {
      console.error(e);
      this.toastService.show('error', 'Algo deu errado!', e.message);
    } finally {
      this.isLoading = false;
      this.onClose();
    }
  }

  onClose() {
    this.close.emit();
  }
}