import { TestBed } from '@angular/core/testing';

import { RecruiterListOfMeetingService } from './recruiter-list-of-meeting.service';

describe('RecruiterListOfMeetingService', () => {
  let service: RecruiterListOfMeetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruiterListOfMeetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
