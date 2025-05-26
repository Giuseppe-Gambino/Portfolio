import { TestBed } from '@angular/core/testing';

import { LenisService } from './lenis.service';

describe('LenisService', () => {
  let service: LenisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LenisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
