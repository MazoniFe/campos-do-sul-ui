import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-spinner',
  imports: [],
  templateUrl: './main-spinner.component.html',
  styleUrl: './main-spinner.component.css'
})
export class MainSpinnerComponent {
  @Input() size: number = 60; 
}