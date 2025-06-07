import { inject, Injectable } from '@angular/core';
import { RestCallService } from '../rest-call/rest-call.service';
import { firstValueFrom } from 'rxjs';
import { IInsertProfile, IProfile, IProfileResponseMetaData, IUpdateProfile } from './types';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  private restCallService = inject(RestCallService);
  constructor() { }

  async getAll(): Promise<IProfileResponseMetaData> {
    return await firstValueFrom(this.restCallService.get('profiles'));
  }

  async getById(id: number): Promise<IProfile> {
    return await firstValueFrom(this.restCallService.get(`profiles/${id}`));
  }

  async insert(body: IUpdateProfile): Promise<IProfile> {
    return await firstValueFrom(this.restCallService.post(`profiles`, body));
  }

  async update(body: IUpdateProfile): Promise<IProfile> {
    return await firstValueFrom(this.restCallService.put(`profiles`, body));
  }
}
