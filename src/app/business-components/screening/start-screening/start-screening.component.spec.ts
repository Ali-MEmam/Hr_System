import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartScreeningComponent } from './start-screening.component';

describe('StartScreeningComponent', () => {
  let component: StartScreeningComponent;
  let fixture: ComponentFixture<StartScreeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartScreeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
