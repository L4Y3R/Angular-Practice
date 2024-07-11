import { Injectable } from '@angular/core';
import { Item } from '../data-models/items';
import { CartItem } from '../data-models/cart-item';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { ErrorHandleService } from './error-handle.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(
    private http: HttpClient,
    private errorHandle: ErrorHandleService
  ) {}

  saveCartUrl = '';
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

  saveCart(cart: CartItem[]) {
    return this.http
      .post(this.saveCartUrl, cart)
      .pipe(retry(2), catchError(this.errorHandle.handleError));
  }

  getCartItems(): CartItem[] {
    return this.cartItemList;
  }
}
