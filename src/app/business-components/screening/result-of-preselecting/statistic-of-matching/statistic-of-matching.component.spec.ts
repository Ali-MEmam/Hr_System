import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticOfMatchingComponent } from './statistic-of-matching.component';

describe('StatisticOfMatchingComponent', () => {
  let component: StatisticOfMatchingComponent;
  let fixture: ComponentFixture<StatisticOfMatchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticOfMatchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticOfMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
