import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProfileFormComponent } from './register-profile-form.component';

describe('RegisterProfileFormComponent', () => {
  let component: RegisterProfileFormComponent;
  let fixture: ComponentFixture<RegisterProfileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProfileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
