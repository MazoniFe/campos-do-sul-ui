import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-settings-profile-section',
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './settings-profile-section.component.html',
  styleUrl: './settings-profile-section.component.css'
})
export class SettingsProfileSectionComponent implements OnInit {
  condominioForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.condominioForm = this.fb.group({
      name: ['', Validators.required],

      email: ['', [
        Validators.required,
        Validators.email 
      ]],

      phone: ['', [
        Validators.required,
        Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/) 
      ]],

      cpf: ['', [
        Validators.required,
        Validators.pattern(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/) 
      ]]
    });
  }
  onSubmit() {
    if (this.condominioForm.valid) {
      console.log('Form values:', this.condominioForm.value);
      // Enviar para backend aqui
    }
  }
}
