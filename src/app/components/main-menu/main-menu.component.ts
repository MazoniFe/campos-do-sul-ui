import { Component } from '@angular/core';
import { IMenuItem } from './types';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MenuProfileComponent } from '../menu-profile/menu-profile.component';

@Component({
  selector: 'app-main-menu',
  imports: [CommonModule, MenuProfileComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

  constructor(private router: Router) { }

  menuList: IMenuItem[] = [
    { icon: 'dashboard', name: 'Dashboard', path: '/dashboard', selected: false },
    { icon: 'people', name: 'Moradores', path: '/residents', selected: false },
    { icon: 'person', name: 'Usuários', path: '/users', selected: false },
    { icon: 'apartment', name: 'Apartmentos', path: '/apartments', selected: false },
    { icon: 'directions_car', name: 'Veículos', path: '/vehicles', selected: false },
    { icon: 'account_circle', name: 'Perfis', path: '/profiles', selected: false },
    { icon: 'settings', name: 'Configurações', path: '/settings', selected: false },
    { icon: 'exit_to_app', name: 'Sair', path: '/login', selected: false }
  ];


  selectMenuItem(item: IMenuItem): void {
    this.menuList.forEach(menuItem => menuItem.selected = false);
    item.selected = true;
    if (item.name === "Sair") {
      console.log("DESLOGANDO");
    }
    this.router.navigate([item.path]);
  }
}
