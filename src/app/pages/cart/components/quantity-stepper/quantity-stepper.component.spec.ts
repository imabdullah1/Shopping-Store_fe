import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityStepperComponent } from './quantity-stepper.component';

describe('QuantityStepperComponent', () => {
  let component: QuantityStepperComponent;
  let fixture: ComponentFixture<QuantityStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantityStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuantityStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
