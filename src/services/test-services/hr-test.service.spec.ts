import { TestBed } from '@angular/core/testing';

import { HrTestService } from './hr-test.service';

describe('HrTestService', () => {
  let service: HrTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
