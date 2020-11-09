import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterListOfMeetingComponent } from './recruiter-list-of-meeting.component';

describe('RecruiterListOfMeetingComponent', () => {
  let component: RecruiterListOfMeetingComponent;
  let fixture: ComponentFixture<RecruiterListOfMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterListOfMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterListOfMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
