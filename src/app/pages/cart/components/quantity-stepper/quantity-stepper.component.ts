import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-quantity-stepper',
  standalone: true,
  imports: [],
  templateUrl: './quantity-stepper.component.html',
  styleUrl: './quantity-stepper.component.css',
})
export class QuantityStepperComponent {
  @Input() quantity: number = 1;
  @Output() quantityChange = new EventEmitter<number>();

  onIncreaseQuantity() {
    this.quantityChange.next(this.quantity + 1);
  }

  onDecreaseQuantity() {
    if (this.quantity > 1) this.quantityChange.next(this.quantity - 1);
  }
}
