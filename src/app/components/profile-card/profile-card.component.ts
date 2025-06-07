import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-profile-card',
  imports: [CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  @Input() profile = {
    id: 0,
    name: 'ADMINISTRADOR',
    features: [1,2,3,4,5,6],
    color: '#a84740',
    usersCount: 12
  };
}
