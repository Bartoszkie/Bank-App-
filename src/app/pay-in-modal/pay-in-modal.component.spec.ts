import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayInModalComponent } from './pay-in-modal.component';

describe('PayInModalComponent', () => {
  let component: PayInModalComponent;
  let fixture: ComponentFixture<PayInModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayInModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayInModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
