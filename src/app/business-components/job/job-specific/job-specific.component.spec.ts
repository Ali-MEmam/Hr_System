import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSpecificComponent } from './job-specific.component';

describe('JobSpecificComponent', () => {
  let component: JobSpecificComponent;
  let fixture: ComponentFixture<JobSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
