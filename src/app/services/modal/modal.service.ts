import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ModalState {
  name: string | null;
  itemId?: string | number | null;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalStateSubject = new BehaviorSubject<ModalState>({ name: null, itemId: null });
  modalState$ = this.modalStateSubject.asObservable();

  open(name: string, itemId?: string | number) {
    this.modalStateSubject.next({ name, itemId: itemId ?? null });
  }

  close() {
    this.modalStateSubject.next({ name: null, itemId: null });
  }
}
