import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHrTestComponent } from './create-hr-test.component';

describe('CreateHrTestComponent', () => {
  let component: CreateHrTestComponent;
  let fixture: ComponentFixture<CreateHrTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHrTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHrTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
