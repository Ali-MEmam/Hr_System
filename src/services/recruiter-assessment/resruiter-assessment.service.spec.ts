import { TestBed } from '@angular/core/testing';

import { ResruiterAssessmentService } from './resruiter-assessment.service';

describe('ResruiterAssessmentService', () => {
  let service: ResruiterAssessmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResruiterAssessmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
