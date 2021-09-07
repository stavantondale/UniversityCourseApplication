import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdmissionsComponent } from './view-admissions.component';

describe('ViewAdmissionsComponent', () => {
  let component: ViewAdmissionsComponent;
  let fixture: ComponentFixture<ViewAdmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdmissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
