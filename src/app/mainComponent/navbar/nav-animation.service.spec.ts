import { TestBed } from '@angular/core/testing';

import { NavAnimationService } from './nav-animation.service';

describe('NavAnimationService', () => {
  let service: NavAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
