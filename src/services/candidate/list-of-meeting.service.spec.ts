import { TestBed } from '@angular/core/testing';

import { ListOfMeetingService } from './list-of-meeting.service';

describe('ListOfMeetingService', () => {
  let service: ListOfMeetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOfMeetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
