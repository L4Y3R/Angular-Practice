import { Component } from '@angular/core';
import { Item } from './data-models/items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cart: Item[] = [];
  itemsFromParent: Item[] = [
    {
      label: 'Vanilla Ice Cream',
      description: 'A delicious ice cream',
      price: 10,
      count: 3,
      imageUrl: 'assets/products/icecream.jfif',
    },
    {
      label: 'VGA Card',
      description: 'Vga card',
      price: 600,
      count: 3,
      imageUrl: 'assets/products/vga.jpg',
    },
    {
      label: 'Drinks',
      description: 'Fruit Drinks',
      price: 60,
      count: 8,
      imageUrl: 'assets/products/drink.jfif',
    },
  ];

  addToCart(item: Item) {
    this.cart.push(item);
    console.log(this.cart);
  }
}
