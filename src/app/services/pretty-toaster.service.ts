import { Injectable, signal } from '@angular/core';
import { PrettyToastr, ToastType } from '../models/toastr.model';

@Injectable({
  providedIn: 'root',
})
export class PrettyToasterService {
  private idCounter = 0;

  private preventDuplicates = signal<boolean>(false);
  private tapToDismiss = signal<boolean>(false);
  private toastrs = signal<PrettyToastr[]>([]);

  private showToast(newToastr: PrettyToastr) {
    if (this.preventDuplicates() && this.toastrs().length > 0) return;

    this.toastrs.update((toastrs) => [...toastrs, newToastr]);

    if (newToastr.timeOut > 0) this.autoClear(newToastr.id, newToastr.timeOut);
  }

  private autoClear(id: number, delay: number) {
    setTimeout(() => this.clear(id), delay);
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
    this.showToast(toast);
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

  setPreventDuplicates(value: boolean) {
    this.preventDuplicates.set(value);
  }

  setTapToDismiss(value: boolean) {
    this.tapToDismiss.set(value);
  }

  get tapToDismissSignal() {
    return this.tapToDismiss;
  }

  get toastrsSignal() {
    return this.toastrs;
  }
}
