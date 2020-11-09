import { TestBed } from '@angular/core/testing';

import { TestMangmentService } from './test-mangment.service';

describe('TestMangmentService', () => {
  let service: TestMangmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestMangmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
