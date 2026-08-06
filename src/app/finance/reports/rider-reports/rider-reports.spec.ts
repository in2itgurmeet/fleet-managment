import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderReports } from './rider-reports';

describe('RiderReports', () => {
  let component: RiderReports;
  let fixture: ComponentFixture<RiderReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiderReports],
    }).compileComponents();

    fixture = TestBed.createComponent(RiderReports);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
