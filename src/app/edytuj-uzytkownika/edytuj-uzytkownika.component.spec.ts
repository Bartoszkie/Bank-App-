import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdytujUzytkownikaComponent } from './edytuj-uzytkownika.component';

describe('EdytujUzytkownikaComponent', () => {
  let component: EdytujUzytkownikaComponent;
  let fixture: ComponentFixture<EdytujUzytkownikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdytujUzytkownikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdytujUzytkownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
