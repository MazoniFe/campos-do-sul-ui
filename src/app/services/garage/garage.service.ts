import { inject, Injectable } from '@angular/core';
import { RestCallService } from '../rest-call/rest-call.service';
import { IGarage, IGarageResponseMetaData, IInsertGarage, IUpdateGarage } from './types';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GarageService {
  
  private restCallService = inject(RestCallService);
  constructor() { }

  async getAll(): Promise<IGarageResponseMetaData> {
    return await firstValueFrom(this.restCallService.get('garages'));
  }

  async getById(id: number): Promise<IGarage> {
    return await firstValueFrom(this.restCallService.get(`garages/${id}`));
  }

  async insert(body: IInsertGarage): Promise<IGarage> {
    return await firstValueFrom(this.restCallService.post(`garages`, body));
  }

  async update(body: IUpdateGarage): Promise<IGarage> {
    return await firstValueFrom(this.restCallService.put(`garages`, body));
  }
}
