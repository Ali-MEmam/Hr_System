import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfAssessmentsComponent } from './list-of-assessments.component';

describe('ListOfAssessmentsComponent', () => {
  let component: ListOfAssessmentsComponent;
  let fixture: ComponentFixture<ListOfAssessmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfAssessmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
