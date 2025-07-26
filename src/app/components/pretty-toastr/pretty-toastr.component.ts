import { Component, inject } from '@angular/core';
import { PrettyToasterService } from '../../services/pretty-toaster.service';

@Component({
  selector: 'app-pretty-toastr',
  imports: [],
  templateUrl: './pretty-toastr.component.html',
  styleUrl: './pretty-toastr.component.scss',
})
export class PrettyToastrComponent {
  private readonly prettyToastrService = inject(PrettyToasterService);

  readonly toastrsArr = this.prettyToastrService.toastrs;
  readonly preventDuplicates = this.prettyToastrService.preventDuplicates;
}
