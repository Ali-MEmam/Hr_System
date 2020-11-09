import { TestBed } from '@angular/core/testing';

import { InvitatioinWithoutScreeningService } from './invitatioin-without-screening.service';

describe('InvitatioinWithoutScreeningService', () => {
  let service: InvitatioinWithoutScreeningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvitatioinWithoutScreeningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
