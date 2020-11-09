import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationWitoutScreeningComponent } from './invitation-witout-screening.component';

describe('InvitationWitoutScreeningComponent', () => {
  let component: InvitationWitoutScreeningComponent;
  let fixture: ComponentFixture<InvitationWitoutScreeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationWitoutScreeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationWitoutScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
