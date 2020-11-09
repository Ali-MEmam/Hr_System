import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCreateNotesComponent } from './job-create-notes.component';

describe('JobCreateNotesComponent', () => {
  let component: JobCreateNotesComponent;
  let fixture: ComponentFixture<JobCreateNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCreateNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCreateNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
