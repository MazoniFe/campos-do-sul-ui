import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService, ToastData } from '../../services/toast/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit, OnDestroy {
  visible = false;
  isHiding  = false;
  title = '';
  message = '';
  type: 'success' | 'error' | 'warning' = 'success';
  timeoutId: any;
  sub!: Subscription;

  constructor(private toastService: ToastService) { }

  ngOnInit() {
    this.sub = this.toastService.toastState$.subscribe((data: ToastData) => {
      this.type = data.type;
      this.title = data.title;
      this.message = data.message;
      this.visible = true;
      this.isHiding = false;

      if (this.timeoutId) clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.isHiding = true;  // ativa a animação fadeout
        setTimeout(() => this.visible = false, 300); // depois de 300ms esconde de fato
      }, data.duration || 3000);
    });


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  get icon(): string {
    switch (this.type) {
      case 'success': return '✅';
      case 'error': return '⛔';
      case 'warning': return '⚠️';
      default: return '';
    }
  }

  get toastClass(): string {
    return `toast ${this.type}`;
  }
}
