import { inject, Injectable } from '@angular/core';
import { RestCallService } from '../rest-call/rest-call.service';
import { firstValueFrom } from 'rxjs';
import { ITowerResponseMetaData, ITower } from './types';

@Injectable({
  providedIn: 'root'
})
export class TowerService {
  private restCallService = inject(RestCallService);
  constructor() { }

  async getAll(size:number = 30, page: number = 0): Promise<ITowerResponseMetaData> {
    return await firstValueFrom(this.restCallService.get(`towers?size=${size}`));
  }

  async getById(id: number): Promise<ITower> {
    return await firstValueFrom(this.restCallService.get(`towers/${id}`));
  }
}
