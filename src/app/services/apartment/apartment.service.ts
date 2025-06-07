import { inject, Injectable } from '@angular/core';
import { RestCallService } from '../rest-call/rest-call.service';
import { IApartment, IApartmentResponseMetaData } from './types';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  private restCallService = inject(RestCallService);
  constructor() { }

  async getAll(): Promise<IApartmentResponseMetaData> {
    return await firstValueFrom(this.restCallService.get('users'));
  }

  async getById(id: number): Promise<IApartment> {
    return await firstValueFrom(this.restCallService.get(`users/${id}`));
  }
}
