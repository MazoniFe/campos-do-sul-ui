import { inject, Injectable } from '@angular/core';
import { RestCallService } from '../rest-call/rest-call.service';
import { IInsertPerson, IPerson, IPersonDetailed, IPersonDetailedResponseMetaData, IPersonResponseMetaData, IUpdatePerson } from './types';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private restCallService = inject(RestCallService);
  constructor() { }

  async getAll(): Promise<IPersonResponseMetaData> {
    return await firstValueFrom(this.restCallService.get('peoples'));
  }

  async getAllDetailed(): Promise<IPersonDetailedResponseMetaData> {
    return await firstValueFrom(this.restCallService.get(`peoples/details`));
  }

  async getById(id: number): Promise<IPerson> {
    return await firstValueFrom(this.restCallService.get(`peoples/${id}`));
  }

  async getDetailedById(id: number): Promise<IPersonDetailed> {
    return await firstValueFrom(this.restCallService.get(`peoples/details/${id}`));
  }

  async insert(body: IInsertPerson): Promise<IPerson> {
    return await firstValueFrom(this.restCallService.post(`peoples`, body));
  }

  async update(body: IUpdatePerson): Promise<IPerson> {
    return await firstValueFrom(this.restCallService.put(`peoples`, body));
  }

  
  async delete(id: number): Promise<void> {
    return await firstValueFrom(this.restCallService.delete(`peoples/${id}`));
  }
}
