import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteRegisterProfileComponent } from './complete-register-profile.component';

describe('CompleteRegisterProfileComponent', () => {
  let component: CompleteRegisterProfileComponent;
  let fixture: ComponentFixture<CompleteRegisterProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteRegisterProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteRegisterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
