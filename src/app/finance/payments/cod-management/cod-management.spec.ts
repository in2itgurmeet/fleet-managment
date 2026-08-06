import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodManagement } from './cod-management';

describe('CodManagement', () => {
  let component: CodManagement;
  let fixture: ComponentFixture<CodManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodManagement],
    }).compileComponents();

    fixture = TestBed.createComponent(CodManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
