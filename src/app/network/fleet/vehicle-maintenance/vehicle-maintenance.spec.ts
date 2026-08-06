import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMaintenance } from './vehicle-maintenance';

describe('VehicleMaintenance', () => {
  let component: VehicleMaintenance;
  let fixture: ComponentFixture<VehicleMaintenance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleMaintenance],
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleMaintenance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
