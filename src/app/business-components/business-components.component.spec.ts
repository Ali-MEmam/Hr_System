import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessComponentsComponent } from './business-components.component';

describe('BusinessComponentsComponent', () => {
  let component: BusinessComponentsComponent;
  let fixture: ComponentFixture<BusinessComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
