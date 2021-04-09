import { TestBed } from '@angular/core/testing';

import { GestionusersService } from './gestionusers.service';

describe('GestionusersService', () => {
  let service: GestionusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
