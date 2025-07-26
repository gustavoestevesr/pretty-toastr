export type ToastType = 'success' | 'error' | 'info' | 'warning';

export class PrettyToastr {
  id!: number;
  title!: string;
  message?: string;

  type!: ToastType;

  tapToDismiss: boolean = false;
  closeButton: boolean = true;
  preventDuplicates: boolean = false;
  progressBar: boolean = false;

  timeOut: number = 5000;
  disableTimeOut: boolean = false;

  onTap?: () => void;

  constructor(init?: Partial<PrettyToastr>) {
    Object.assign(this, {
      ...init,
    });
  }
}
