import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, Toast } from './toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  get toasts$() {
    return this.toastService.toasts$;
  }

  constructor(public toastService: ToastService) { }

  removeToast(id: string) {
    this.toastService.remove(id);
  }
}
