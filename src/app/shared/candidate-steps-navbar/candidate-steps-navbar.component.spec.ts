import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateStepsNavbarComponent } from './candidate-steps-navbar.component';

describe('CandidateStepsNavbarComponent', () => {
  let component: CandidateStepsNavbarComponent;
  let fixture: ComponentFixture<CandidateStepsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateStepsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateStepsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
