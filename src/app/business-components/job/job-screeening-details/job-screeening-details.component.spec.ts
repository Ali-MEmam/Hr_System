import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobScreeeningDetailsComponent } from './job-screeening-details.component';

describe('JobScreeeningDetailsComponent', () => {
  let component: JobScreeeningDetailsComponent;
  let fixture: ComponentFixture<JobScreeeningDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobScreeeningDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobScreeeningDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
