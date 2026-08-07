import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingParcels } from './outgoing-parcels';

describe('OutgoingParcels', () => {
  let component: OutgoingParcels;
  let fixture: ComponentFixture<OutgoingParcels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutgoingParcels],
    }).compileComponents();

    fixture = TestBed.createComponent(OutgoingParcels);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
