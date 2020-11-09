import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentByTypeComponent } from './assessment-by-type.component';

describe('AssessmentByTypeComponent', () => {
  let component: AssessmentByTypeComponent;
  let fixture: ComponentFixture<AssessmentByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
