import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApplicantByidComponent } from './view-applicant-byid.component';

describe('ViewApplicantByidComponent', () => {
  let component: ViewApplicantByidComponent;
  let fixture: ComponentFixture<ViewApplicantByidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewApplicantByidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewApplicantByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
