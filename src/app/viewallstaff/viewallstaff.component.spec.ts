import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallstaffComponent } from './viewallstaff.component';

describe('ViewallstaffComponent', () => {
  let component: ViewallstaffComponent;
  let fixture: ComponentFixture<ViewallstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallstaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
