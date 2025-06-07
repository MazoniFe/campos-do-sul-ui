import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CoreButtonComponent } from "../../button/button.component";
import { MainSpinnerComponent } from "../../main-spinner/main-spinner.component";

@Component({
  selector: 'app-generic-modal',
  imports: [CoreButtonComponent, MainSpinnerComponent],
  templateUrl: './generic-modal.component.html',
  styleUrl: './generic-modal.component.css'
})

export class GenericModalComponent {
  @Input() type: 'INFO' | 'WARNING' | 'ERROR' | 'SUCCESS' = 'INFO';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() submitLabel: string = 'Confirmar';
  @Input() cancelLabel: string = 'Cancelar';
  @Input() isLoading: boolean = false;

  @Output() onSubmit = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

getIcon(): string {
  switch (this.type) {
    case 'WARNING':
      return '⚠️';
    case 'ERROR':
      return '❌';
    case 'SUCCESS':
      return '✅';
    case 'INFO':
    default:
      return 'ℹ️';
  }
}
}