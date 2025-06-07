import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-settings-condominium-section',
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective ],
  templateUrl: './settings-condominium-section.component.html',
  styleUrl: './settings-condominium-section.component.css'
})

export class CondominioFormComponent implements OnInit {
  condominioForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.condominioForm = this.fb.group({
      nome: ['Residencial Campos do Sul', Validators.required],
      cnpj: ['00.000.000/0001-00', Validators.required],
      endereco: ['Rua Família gonçalves Carneiro, 441 - Cavalhada', Validators.required]
    });
  }

  onSubmit() {
    if (this.condominioForm.valid) {
      console.log('Form values:', this.condominioForm.value);
    }
  }
}