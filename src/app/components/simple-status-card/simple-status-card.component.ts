import { Component, Input } from '@angular/core';
import { MainSpinnerComponent } from '../main-spinner/main-spinner.component';

@Component({
  selector: 'app-simple-status-card',
  imports: [MainSpinnerComponent],
  templateUrl: './simple-status-card.component.html',
  styleUrl: './simple-status-card.component.css'
})
export class StatusCardComponent {
  @Input() title!: string;
  @Input() value!: number | string;
  @Input() color: string = 'black';
  @Input() isLoading: boolean = true;
}