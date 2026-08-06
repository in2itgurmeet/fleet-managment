import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActioRendrer } from './actio-rendrer';

describe('ActioRendrer', () => {
  let component: ActioRendrer;
  let fixture: ComponentFixture<ActioRendrer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActioRendrer],
    }).compileComponents();

    fixture = TestBed.createComponent(ActioRendrer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
