import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchOfPreSelectingComponent } from './lunch-of-pre-selecting.component';

describe('LunchOfPreSelectingComponent', () => {
  let component: LunchOfPreSelectingComponent;
  let fixture: ComponentFixture<LunchOfPreSelectingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchOfPreSelectingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchOfPreSelectingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
