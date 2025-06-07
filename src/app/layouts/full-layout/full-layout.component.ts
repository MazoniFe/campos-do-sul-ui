import { Component } from '@angular/core';
import { MainMenuComponent } from '../../components/main-menu/main-menu.component';
import { RouterModule } from '@angular/router';
import { ToastComponent } from "../../components/toast/toast.component";

@Component({
  selector: 'app-full-layout',
  imports: [MainMenuComponent, RouterModule, ToastComponent],
  templateUrl: './full-layout.component.html',
  styleUrl: './full-layout.component.css'
})
export class FullLayoutComponent {

}
