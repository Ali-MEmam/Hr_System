import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectMeetingComponent } from './affect-meeting.component';

describe('AffectMeetingComponent', () => {
  let component: AffectMeetingComponent;
  let fixture: ComponentFixture<AffectMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
