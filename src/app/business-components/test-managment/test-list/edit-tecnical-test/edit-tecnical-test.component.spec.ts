import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTecnicalTestComponent } from './edit-tecnical-test.component';

describe('EditTecnicalTestComponent', () => {
  let component: EditTecnicalTestComponent;
  let fixture: ComponentFixture<EditTecnicalTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTecnicalTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTecnicalTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
