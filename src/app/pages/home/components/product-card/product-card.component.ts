import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../data/products.data';
import { TruncatePipe } from '../../../../pipes/truncate.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [TruncatePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() add = new EventEmitter<Product>();

  onAdd() {
    this.add.next(this.product);
  }
}
