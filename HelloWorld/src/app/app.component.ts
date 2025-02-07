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
  ngOnInit(): void {}
}
