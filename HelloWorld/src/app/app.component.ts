import { Component, OnInit } from '@angular/core';
import { Item } from './data-models/items';
import { ItemService } from './services/item.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  viewType: string = 'grid';
  itemList: Item[] = [];

  constructor(
    private itemService: ItemService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemList = this.itemService.getItemList();
    console.log(this.itemList);
  }

  addToCart(item: Item) {
    this.cartService.setCartItems(item);
  }
}
