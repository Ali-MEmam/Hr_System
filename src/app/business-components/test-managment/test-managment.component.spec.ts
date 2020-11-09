import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestManagmentComponent } from './test-managment.component';

describe('TestManagmentComponent', () => {
  let component: TestManagmentComponent;
  let fixture: ComponentFixture<TestManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
