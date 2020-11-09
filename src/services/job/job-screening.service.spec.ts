import { TestBed } from '@angular/core/testing';

import { JobScreeningService } from './job-screening.service';

describe('JobScreeningService', () => {
  let service: JobScreeningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobScreeningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
