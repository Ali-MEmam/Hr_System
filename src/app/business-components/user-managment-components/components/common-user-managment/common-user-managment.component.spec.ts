import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUserManagmentComponent } from './common-user-managment.component';

describe('CommonUserManagmentComponent', () => {
  let component: CommonUserManagmentComponent;
  let fixture: ComponentFixture<CommonUserManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonUserManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUserManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
