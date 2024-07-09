import { Injectable } from '@angular/core';
import { Item } from '../data-models/items';
import { CartItem } from '../data-models/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItemList: CartItem[] = [];

  setCartItems(item: Item) {
    let alreadyAddedItem: CartItem = this.cartItemList.find(
      (value: CartItem, index: number) => {
        return value.id === item.id;
      }
    );

    if (alreadyAddedItem) {
      alreadyAddedItem.quantity++;
    } else {
      let tmpCartItem: CartItem = Object.assign({ quantity: 1 }, item);
      this.cartItemList.push(tmpCartItem);
    }
  }

  getCartItems(): Item[] {
    return this.cartItemList;
  }
}
