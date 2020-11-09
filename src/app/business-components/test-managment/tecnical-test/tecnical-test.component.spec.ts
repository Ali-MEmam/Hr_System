import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicalTestComponent } from './tecnical-test.component';

describe('TecnicalTestComponent', () => {
  let component: TecnicalTestComponent;
  let fixture: ComponentFixture<TecnicalTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicalTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicalTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
