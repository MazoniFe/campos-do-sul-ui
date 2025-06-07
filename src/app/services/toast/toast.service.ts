import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type ToastType = 'success' | 'error' | 'warning';

export interface ToastData {
  type: ToastType;
  title: string;
  message: string;
  duration?: number;
}


@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastSubject = new Subject<ToastData>();
  toastState$ = this.toastSubject.asObservable();

  show(type: ToastType, title: string, message: string, duration = 3000) {
    this.toastSubject.next({ type, title, message, duration });
  }
}