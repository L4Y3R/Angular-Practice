import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/data-models/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItemList: CartItem[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCartDetails();
  }

  getCartDetails() {
    this.cartItemList = this.cartService.getCartItems();
  }
}
