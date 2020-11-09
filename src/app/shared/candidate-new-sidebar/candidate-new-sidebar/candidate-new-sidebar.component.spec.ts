import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateNewSidebarComponent } from './candidate-new-sidebar.component';

describe('CandidateNewSidebarComponent', () => {
  let component: CandidateNewSidebarComponent;
  let fixture: ComponentFixture<CandidateNewSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateNewSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateNewSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
