import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllShipments } from './all-shipments';

describe('AllShipments', () => {
  let component: AllShipments;
  let fixture: ComponentFixture<AllShipments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllShipments],
    }).compileComponents();

    fixture = TestBed.createComponent(AllShipments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
