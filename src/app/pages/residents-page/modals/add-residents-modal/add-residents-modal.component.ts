import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { CoreButtonComponent } from '../../../../components/button/button.component';
import { MainSpinnerComponent } from "../../../../components/main-spinner/main-spinner.component";
import { PersonService } from '../../../../services/person/person.service';
import { ToastService } from '../../../../services/toast/toast.service';

@Component({
  selector: 'app-add-residents-modal',
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective, CoreButtonComponent, MainSpinnerComponent],
  templateUrl: './add-residents-modal.component.html',
  styleUrl: './add-residents-modal.component.css'
})
export class AddResidentsModalComponent implements OnInit {

  residentForm!: FormGroup;
  constructor(private fb: FormBuilder, private personService: PersonService, private toastService: ToastService) { }

  @Output() close = new EventEmitter<void>();
  @Output() residentUpdated = new EventEmitter<void>();


  isLoading: boolean = false;


  ngOnInit() {
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
        birthDate: formData.birthDate
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

  onClose() {
    this.close.emit();
  }
}
