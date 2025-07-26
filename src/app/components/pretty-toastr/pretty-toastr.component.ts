import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PrettyToasterService } from '../../services/pretty-toaster.service';

@Component({
  selector: 'app-pretty-toastr',
  imports: [NgClass],
  templateUrl: './pretty-toastr.component.html',
  styleUrl: './pretty-toastr.component.scss',
})
export class PrettyToastrComponent {
  readonly prettyToastrService = inject(PrettyToasterService);
}
