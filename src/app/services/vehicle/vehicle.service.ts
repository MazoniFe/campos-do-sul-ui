import { inject, Injectable } from '@angular/core';
import { RestCallService } from '../rest-call/rest-call.service';
import { firstValueFrom } from 'rxjs';
import { IVehicleResponseMetaData, IVehicle, IInsertVehicle, IUpdateVehicle } from './types';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private restCallService = inject(RestCallService);
  constructor() { }

  async getAll(): Promise<IVehicleResponseMetaData> {
    return await firstValueFrom(this.restCallService.get('vehicles'));
  }

  async getById(id: number): Promise<IVehicle> {
    return await firstValueFrom(this.restCallService.get(`vehicles/${id}`));
  }

  async insert(body: IInsertVehicle): Promise<IVehicle> {
    return await firstValueFrom(this.restCallService.post(`vehicles`, body));
  }

  async update(body: IUpdateVehicle): Promise<IVehicle> {
    return await firstValueFrom(this.restCallService.put(`vehicles`, body));
  }
}
