import { DecimalPipe } from '@angular/common';
import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [DecimalPipe, RouterLink],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent {
  total = computed(() => this.cartService.cart().total);
  count = computed(() => this.cartService.cart().count);

  constructor(private cartService: CartService) {}
}
