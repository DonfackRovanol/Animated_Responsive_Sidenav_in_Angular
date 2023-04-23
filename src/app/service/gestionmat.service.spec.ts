import { TestBed } from '@angular/core/testing';

import { GestionmatService } from './gestionmat.service';

describe('GestionmatService', () => {
  let service: GestionmatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionmatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
