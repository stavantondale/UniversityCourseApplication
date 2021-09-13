import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalcostComponent } from './totalcost.component';

describe('TotalcostComponent', () => {
  let component: TotalcostComponent;
  let fixture: ComponentFixture<TotalcostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalcostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalcostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
