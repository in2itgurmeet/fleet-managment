import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingParcels } from './incoming-parcels';

describe('IncomingParcels', () => {
  let component: IncomingParcels;
  let fixture: ComponentFixture<IncomingParcels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomingParcels],
    }).compileComponents();

    fixture = TestBed.createComponent(IncomingParcels);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
