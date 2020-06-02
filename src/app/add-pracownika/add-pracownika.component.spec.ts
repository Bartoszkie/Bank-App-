import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPracownikaComponent } from './add-pracownika.component';

describe('AddPracownikaComponent', () => {
  let component: AddPracownikaComponent;
  let fixture: ComponentFixture<AddPracownikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPracownikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPracownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
