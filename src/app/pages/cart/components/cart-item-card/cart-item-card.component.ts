import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../../../services/cart.service';
import { QuantityStepperComponent } from '../quantity-stepper/quantity-stepper.component';

@Component({
  selector: 'app-cart-item-card',
  standalone: true,
  imports: [QuantityStepperComponent],
  templateUrl: './cart-item-card.component.html',
  styleUrl: './cart-item-card.component.css',
})
export class CartItemCardComponent {
  @Input() item!: CartItem;
  @Output() itemQuantityUpdate = new EventEmitter<number>();
  @Output() removeItem = new EventEmitter<void>();

  onQuantityChange(quantity: number) {
    this.itemQuantityUpdate.next(quantity);
  }

  onRemoveItem() {
    this.removeItem.next();
  }
}
