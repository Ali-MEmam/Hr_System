import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSocialNetworksComponent } from './candidate-social-networks.component';

describe('CandidateSocialNetworksComponent', () => {
  let component: CandidateSocialNetworksComponent;
  let fixture: ComponentFixture<CandidateSocialNetworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateSocialNetworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSocialNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
