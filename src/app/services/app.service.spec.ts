import { TestBed } from '@angular/core/testing';

import { ApppService } from './app.service';

describe('ApppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
