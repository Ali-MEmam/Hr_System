import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultOfPreselectingComponent } from './result-of-preselecting.component';

describe('ResultOfPreselectingComponent', () => {
  let component: ResultOfPreselectingComponent;
  let fixture: ComponentFixture<ResultOfPreselectingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultOfPreselectingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultOfPreselectingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
