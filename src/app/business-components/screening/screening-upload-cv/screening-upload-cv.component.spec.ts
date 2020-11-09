import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningUploadCvComponent } from './screening-upload-cv.component';

describe('ScreeningUploadCvComponent', () => {
  let component: ScreeningUploadCvComponent;
  let fixture: ComponentFixture<ScreeningUploadCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeningUploadCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningUploadCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
