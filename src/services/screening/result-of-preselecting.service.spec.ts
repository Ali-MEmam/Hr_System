import { TestBed } from '@angular/core/testing';

import { ResultOfPreselectingService } from './result-of-preselecting.service';

describe('ResultOfPreselectingService', () => {
  let service: ResultOfPreselectingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultOfPreselectingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
