import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicalComponent } from './tecnical.component';

describe('TecnicalComponent', () => {
  let component: TecnicalComponent;
  let fixture: ComponentFixture<TecnicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
