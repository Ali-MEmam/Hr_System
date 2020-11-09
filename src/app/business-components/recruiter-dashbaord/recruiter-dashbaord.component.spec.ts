import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterDashbaordComponent } from './recruiter-dashbaord.component';

describe('RecruiterDashbaordComponent', () => {
  let component: RecruiterDashbaordComponent;
  let fixture: ComponentFixture<RecruiterDashbaordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterDashbaordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
