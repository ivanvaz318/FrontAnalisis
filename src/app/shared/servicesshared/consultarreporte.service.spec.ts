import { TestBed } from '@angular/core/testing';

import { ConsultarreporteService } from './consultarreporte.service';

describe('ConsultarreporteService', () => {
  let service: ConsultarreporteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarreporteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
