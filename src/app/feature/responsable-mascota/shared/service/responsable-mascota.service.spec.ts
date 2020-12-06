import { TestBed } from '@angular/core/testing';

import { ResponsableMascotaService } from './responsable-mascota.service';

describe('ResponsableMascotaService', () => {
  let service: ResponsableMascotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsableMascotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
