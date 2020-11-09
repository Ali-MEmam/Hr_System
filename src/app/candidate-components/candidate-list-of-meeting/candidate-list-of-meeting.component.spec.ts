import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateListOfMeetingComponent } from './candidate-list-of-meeting.component';

describe('CandidateListOfMeetingComponent', () => {
  let component: CandidateListOfMeetingComponent;
  let fixture: ComponentFixture<CandidateListOfMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateListOfMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateListOfMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
