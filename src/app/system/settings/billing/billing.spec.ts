import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Billing } from './billing';

describe('Billing', () => {
  let component: Billing;
  let fixture: ComponentFixture<Billing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Billing],
    }).compileComponents();

    fixture = TestBed.createComponent(Billing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose billing history data for the grid', () => {
    expect(component.billingHistory.length).toBeGreaterThan(0);
    expect(component.billingHistoryColumns.length).toBe(5);
  });
});
