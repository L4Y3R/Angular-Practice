import { Injectable } from '@angular/core';
import { Item } from '../data-models/items';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  itemList = [
    {
      id: 1,
      label: 'Vanilla Ice Cream',
      description: 'A delicious ice cream',
      price: 10,
      count: 3,
      imageUrl: 'assets/products/icecream.jfif',
    },
    {
      id: 2,
      label: 'VGA Card',
      description: 'Vga card',
      price: 600,
      count: 3,
      imageUrl: 'assets/products/vga.jpg',
    },
    {
      id: 3,
      label: 'Drinks',
      description: 'Fruit Drinks',
      price: 60,
      count: 8,
      imageUrl: 'assets/products/drink.jfif',
    },
  ];

  constructor() {}

  getItemList(): Item[] {
    return this.itemList;
  }
}
