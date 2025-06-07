import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})

export class CoreButtonComponent {
  @Input() type: 'primary' | 'secondary' | 'delete' = 'primary';
  @Input() disabled = false;
  @Output() action = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled) {
      this.action.emit();
    }
  }
}