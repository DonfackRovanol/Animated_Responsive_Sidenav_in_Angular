import { TestBed } from '@angular/core/testing';

import { GestionensService } from './gestionens.service';

describe('GestionensService', () => {
  let service: GestionensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
