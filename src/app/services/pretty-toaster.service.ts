import { Injectable, signal } from '@angular/core';
import { PrettyToastr, ToastType } from '../models/toastr.model';

@Injectable({
  providedIn: 'root',
})
export class PrettyToasterService {
  private idCounter = 0;
  preventDuplicates = false;
  toastrs = signal<PrettyToastr[]>([]);

  private showToastr(newToastr: PrettyToastr) {
    this.toastrs.update((toastrs) => [...toastrs, newToastr]);

    if (newToastr.timeOut > 0) {
      setTimeout(() => {
        this.clear(newToastr.id);
      }, newToastr.timeOut);
    }
  }

  private createToast(
    type: ToastType,
    options: Partial<PrettyToastr>
  ): PrettyToastr {
    const id = ++this.idCounter;

    return new PrettyToastr({
      ...options,
      id,
      type,
      onTap: options.onTap ?? (() => this.clear(id)),
    });
  }

  toast(type: ToastType, options: Partial<PrettyToastr>) {
    const toast = this.createToast(type, options);
    this.showToastr(toast);
  }

  success(options: Partial<PrettyToastr>) {
    this.toast('success', options);
  }

  info(options: Partial<PrettyToastr>) {
    this.toast('info', options);
  }

  warn(options: Partial<PrettyToastr>) {
    this.toast('warning', options);
  }

  error(options: Partial<PrettyToastr>) {
    this.toast('error', options);
  }

  clearAll() {
    this.toastrs.set([]);
  }

  clear(id: number) {
    this.toastrs.update((toasts) => toasts.filter((t) => t.id !== id));
  }
}
