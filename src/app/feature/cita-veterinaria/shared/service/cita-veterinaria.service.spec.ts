import { TestBed } from '@angular/core/testing';

import { CitaVeterinariaService } from './cita-veterinaria.service';

describe('CitaVeterinariaService', () => {
  let service: CitaVeterinariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitaVeterinariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
