import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateContactComponent } from './candidate-contact.component';

describe('CandidateContactComponent', () => {
  let component: CandidateContactComponent;
  let fixture: ComponentFixture<CandidateContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
