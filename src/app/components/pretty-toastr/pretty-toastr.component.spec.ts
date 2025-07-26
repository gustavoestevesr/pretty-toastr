import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrettyToastrComponent } from './pretty-toastr.component';

describe('PrettyToastrComponent', () => {
  let component: PrettyToastrComponent;
  let fixture: ComponentFixture<PrettyToastrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrettyToastrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrettyToastrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
