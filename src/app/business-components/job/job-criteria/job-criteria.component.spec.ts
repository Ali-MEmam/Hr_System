import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCriteriaComponent } from './job-criteria.component';

describe('JobCriteriaComponent', () => {
  let component: JobCriteriaComponent;
  let fixture: ComponentFixture<JobCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
