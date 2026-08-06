import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutePlanning } from './route-planning';

describe('RoutePlanning', () => {
  let component: RoutePlanning;
  let fixture: ComponentFixture<RoutePlanning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutePlanning],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutePlanning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
