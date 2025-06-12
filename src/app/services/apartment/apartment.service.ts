import { inject, Injectable } from '@angular/core';
import { RestCallService } from '../rest-call/rest-call.service';
import { IApartment, IApartmentResponseMetaData, IApartmentToListResponseMetaData } from './types';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  private restCallService = inject(RestCallService);
  constructor() { }

    async getAll(size: number = 30, filter: string = ''): Promise<IApartmentToListResponseMetaData> {
    return await firstValueFrom(this.restCallService.get(`apartments?size=${size}&filter=${filter}`));
  }


  async getAllDetailed(size: number = 30): Promise<IApartmentResponseMetaData> {
    return await firstValueFrom(this.restCallService.get(`apartments/detailed?size=${size}`));
  }

  async getById(id: number): Promise<IApartment> {
    return await firstValueFrom(this.restCallService.get(`apartments/${id}`));
  }
}
