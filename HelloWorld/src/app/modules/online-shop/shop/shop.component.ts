import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/data-models/items';
import { CartService } from 'src/app/services/cart.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
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
    this.itemService.getItemList().subscribe((response) => {
      this.itemList = response.body;
    });
  }

  addToCart(item: Item) {
    this.cartService.setCartItems(item);
    console.log(this.cartService.getCartItems());
  }
}
