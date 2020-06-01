import { TestBed } from '@angular/core/testing';

import { UżytkownicyService } from './użytkownicy.service';

describe('UżytkownicyService', () => {
  let service: UżytkownicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UżytkownicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
