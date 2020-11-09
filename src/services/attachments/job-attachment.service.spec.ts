import { TestBed } from '@angular/core/testing';

import { JobAttachmentService } from './job-attachment.service';

describe('JobAttachmentService', () => {
  let service: JobAttachmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobAttachmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
