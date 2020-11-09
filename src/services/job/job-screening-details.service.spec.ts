import { TestBed } from '@angular/core/testing';

import { JobScreeningDetailsService } from './job-screening-details.service';

describe('JobScreeningDetailsService', () => {
  let service: JobScreeningDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobScreeningDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
