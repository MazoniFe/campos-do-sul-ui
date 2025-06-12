import { inject, Injectable } from '@angular/core';
import { RestCallService } from '../rest-call/rest-call.service';
import { firstValueFrom } from 'rxjs';
import { IUserResponseMetaData, IUser, IInsertUser, IUpdateUser } from './types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private restCallService = inject(RestCallService);
  constructor() { }

  async getAll(): Promise<IUserResponseMetaData> {
    return await firstValueFrom(this.restCallService.get('users'));
  }

  async getById(id: number): Promise<IUser> {
    return await firstValueFrom(this.restCallService.get(`users/${id}`));
  }

  async insert(body: IInsertUser): Promise<IUser> {
    return await firstValueFrom(this.restCallService.post(`users`, body));
  }

  async update(body: IUpdateUser): Promise<IUser> {
    return await firstValueFrom(this.restCallService.put(`users`, body));
  }
}
