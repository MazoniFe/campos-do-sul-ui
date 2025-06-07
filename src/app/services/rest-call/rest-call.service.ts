import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {API_ENDPOINT, API_PORT} from '../../../../environment';

@Injectable({
  providedIn: 'root'
})
export class RestCallService {
  private http = inject(HttpClient);
  private apiUrl = `${API_ENDPOINT}:${API_PORT}`;

  get(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`);
  }

  post(endpoint: string, data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/${endpoint}`, data, { headers });
  }

  put(endpoint: string, data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.apiUrl}/${endpoint}`, data, { headers });
  }

  delete(endpoint: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${endpoint}`);
  }
}
