import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemCardComponent } from './cart-item-card.component';

describe('CartItemCardComponent', () => {
  let component: CartItemCardComponent;
  let fixture: ComponentFixture<CartItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartItemCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
