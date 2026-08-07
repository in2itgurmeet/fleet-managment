import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingOrders } from './processing-orders';

describe('ProcessingOrders', () => {
  let component: ProcessingOrders;
  let fixture: ComponentFixture<ProcessingOrders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessingOrders],
    }).compileComponents();

    fixture = TestBed.createComponent(ProcessingOrders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
