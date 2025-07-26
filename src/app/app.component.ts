import { Component, inject, OnInit } from '@angular/core';
import { PrettyToastrComponent } from './components/pretty-toastr/pretty-toastr.component';
import { PrettyToasterService } from './services/pretty-toaster.service';
import { PrettyToastr, ToastType } from './models/toastr.model';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [PrettyToastrComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = ''
  private readonly prettyToastrService = inject(PrettyToasterService);
  readonly typesArr = ['error', 'info', 'success', 'warning']

  ngOnInit(): void {
    this.toastrForm.valueChanges.pipe(debounceTime(300)).subscribe((toastr) => {
      if (toastr.disableTimeOut) {
        this.toastrForm.get('timeOut')?.setValue(0);
        this.toastrForm.get('timeOut')?.disable();
      } else {
        this.toastrForm.get('timeOut')?.enable();
      }
    })
  }

  toastrForm = new FormGroup({
    title: new FormControl('title'),
    message: new FormControl('message', Validators.required),
    timeOut: new FormControl(5000),
    type: new FormControl('error'),
    disableTimeOut: new FormControl(false),
    tapToDismiss: new FormControl(true),
    closeButton: new FormControl(true),
    preventDuplicates: new FormControl(true),
    progressBar: new FormControl(true),
  });

  openToast() {
    const values = this.toastrForm.getRawValue();
    const type = values.type ?? 'error' as any;

    this.prettyToastrService.toast(type, {
      title: values.title ?? '',
      message: values.message ?? '',
      timeOut: values.timeOut ?? 5000,
      disableTimeOut: values.disableTimeOut ?? false,
      tapToDismiss: values.tapToDismiss ?? true,
      closeButton: values.closeButton ?? false,
      preventDuplicates: values.preventDuplicates ?? false,
      progressBar: values.progressBar ?? false,
    });
  }
}
