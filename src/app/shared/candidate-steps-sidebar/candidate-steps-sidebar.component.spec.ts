import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateStepsSidebarComponent } from './candidate-steps-sidebar.component';

describe('CandidateStepsSidebarComponent', () => {
  let component: CandidateStepsSidebarComponent;
  let fixture: ComponentFixture<CandidateStepsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateStepsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateStepsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
