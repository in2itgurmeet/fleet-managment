import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  toasts$ = this.toastsSubject.asObservable();

  showSuccess(message: string, title: string = 'Success!') {
    this.show('success', title, message);
  }

  showError(message: string, title: string = 'Error!') {
    this.show('error', title, message);
  }

  showInfo(message: string, title: string = 'Info!') {
    this.show('info', title, message);
  }

  showWarning(message: string, title: string = 'Warning!') {
    this.show('warning', title, message);
  }

  private show(type: 'success' | 'error' | 'info' | 'warning', title: string, message: string) {
    const id = Math.random().toString(36).substr(2, 9);
    const currentToasts = this.toastsSubject.value;
    this.toastsSubject.next([...currentToasts, { id, type, title, message }]);

    setTimeout(() => {
      this.remove(id);
    }, 5000);
  }

  remove(id: string) {
    const currentToasts = this.toastsSubject.value;
    this.toastsSubject.next(currentToasts.filter(t => t.id !== id));
  }
}
