import { Component } from '@angular/core';
import { IProfile } from '../../services/profile/types';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component';

@Component({
  selector: 'app-profiles-page',
  imports: [ProfileCardComponent],
  templateUrl: './profiles-page.component.html',
  styleUrl: './profiles-page.component.css'
})
export class ProfilesPageComponent {
  profiles: IProfile[] = [
    {
      id: 1, name: 'ADMIN', features: [1, 2, 3],
      usersCount: 0,
      color: '#21ff21'
    },
    {
      id: 2, name: 'PORTEIRO', features: [5, 6, 7],
      usersCount: 0,
      color: '#f2ff21'
    },
    {
      id: 3, name: 'PORTEIRO', features: [5, 6, 7],
      usersCount: 0,
      color: '#1d8af8'
    },
    {
      id: 4, name: 'MORADOR', features: [5, 6, 7],
      usersCount: 0,
      color: '#1d8af8'
    },
    {
      id: 5, name: 'ADMIN', features: [1, 2, 3],
      usersCount: 0,
      color: '#21ff21'
    },
    {
      id: 6, name: 'PORTEIRO', features: [5, 6, 7],
      usersCount: 0,
      color: '#f2ff21'
    },
    {
      id: 7, name: 'PORTEIRO', features: [5, 6, 7],
      usersCount: 0,
      color: '#1d8af8'
    },
    {
      id: 8, name: 'MORADOR', features: [5, 6, 7],
      usersCount: 0,
      color: '#1d8af8'
    }
  ]
}
