import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { RestCallService } from '../rest-call/rest-call.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private restCallService = inject(RestCallService);

  async login(username: string, password: string): Promise<Observable<any>> {
    const body = { username, password };
    console.log("LOGANDO COMO:" + username + " " + password);
    return this.restCallService.post('auth/login', body);
  }

  logout(): Observable<any> {
    return this.restCallService.post('auth/logout', {}); 
  }

  getUserProfile(): Observable<any> {
    return this.restCallService.get('auth/profile');
  }
}