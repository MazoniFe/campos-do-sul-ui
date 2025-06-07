import { Component } from '@angular/core';
import { LoginService } from '../../services/login/login-service.service';
import { MainSpinnerComponent } from "../../components/main-spinner/main-spinner.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [MainSpinnerComponent, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  constructor(
    private loginService: LoginService,
      private router: Router

  ) { }

  isLoading: boolean = false;

  async login(event: Event): Promise<void> {
    event.preventDefault();
    this.isLoading = true;
    try {
      await this.loginService.login('FELIPE', 'MAZONI');
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.error('Erro ao buscar torres:', error);
    } finally {
      this.isLoading = false;
    }
  }
}
