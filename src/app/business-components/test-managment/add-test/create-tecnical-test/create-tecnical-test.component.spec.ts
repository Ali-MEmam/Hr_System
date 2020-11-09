import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTecnicalTestComponent } from './create-tecnical-test.component';

describe('CreateTecnicalTestComponent', () => {
  let component: CreateTecnicalTestComponent;
  let fixture: ComponentFixture<CreateTecnicalTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTecnicalTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTecnicalTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
