import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstConctactComponent } from './first-conctact.component';

describe('FirstConctactComponent', () => {
  let component: FirstConctactComponent;
  let fixture: ComponentFixture<FirstConctactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstConctactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstConctactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
