import { TestBed } from '@angular/core/testing';

import { ConsultanumRCService } from './consultanum-rc.service';

describe('ConsultanumRCService', () => {
  let service: ConsultanumRCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultanumRCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
