import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMemberHomePageComponent } from './staff-member-home-page.component';

describe('StaffMemberHomePageComponent', () => {
  let component: StaffMemberHomePageComponent;
  let fixture: ComponentFixture<StaffMemberHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffMemberHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMemberHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
