import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users-page',
  imports: [CommonModule],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent {

  users = [
    {
      id: 1,
      name: "Admin Sistema",
      email: "admin@condominio.com",
      profile: "Administrador",
      lastAccess: "2024-01-15",
    },
    {
      id: 1,
      name: "Porteiro João",
      email: "porteiro@condominio.com",
      profile: "Porteiro",
      lastAccess: "2024-01-15",
    },
    {
      id: 1,
      name: "Sibndico Itamar",
      email: "sindico@condominio.com",
      profile: "Sindico",
      lastAccess: "2024-01-15",
    }
  ]
}
