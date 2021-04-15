import { TestBed } from '@angular/core/testing';

import { AnalizarcomentarioService } from './analizarcomentario.service';

describe('AnalizarcomentarioService', () => {
  let service: AnalizarcomentarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalizarcomentarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
