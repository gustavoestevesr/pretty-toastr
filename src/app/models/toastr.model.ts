export type ToastType = 'success' | 'error' | 'info' | 'warning';

export class PrettyToastr {
  id!: number;
  title!: string;
  message?: string;

  type!: ToastType;

  tapToDismiss: boolean = true;
  closeButton: boolean = true;
  preventDuplicates: boolean = true;
  progressBar: boolean = true;

  timeOut: number = 5000;
  disableTimeOut: boolean = false;

  onTap?: () => void;

  constructor(init?: Partial<PrettyToastr>) {
    Object.assign(this, {
      ...init,
    });
  }
}
