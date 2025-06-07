import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  @Input() title: string = '';
  @Input() subtitle?: string = '';
  @Input() defaultOpen: boolean = true;

  isOpen: boolean = this.defaultOpen;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}