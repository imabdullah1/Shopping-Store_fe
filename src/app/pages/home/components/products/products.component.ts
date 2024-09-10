import { Component } from '@angular/core';
import { Product, PRODUCTS } from '../../../../data/products.data';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products = PRODUCTS;

  constructor(private cartService: CartService) {}

  onAdd(product: Product) {
    this.cartService.addItem({
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: 1,
    });
  }
}
