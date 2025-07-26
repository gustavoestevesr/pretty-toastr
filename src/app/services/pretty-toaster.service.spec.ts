import { TestBed } from '@angular/core/testing';

import { PrettyToasterService } from './pretty-toaster.service';

describe('PrettyToasterService', () => {
  let service: PrettyToasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrettyToasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
