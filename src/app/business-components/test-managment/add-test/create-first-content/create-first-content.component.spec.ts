import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFirstContentComponent } from './create-first-content.component';

describe('CreateFirstContentComponent', () => {
  let component: CreateFirstContentComponent;
  let fixture: ComponentFixture<CreateFirstContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFirstContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFirstContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
