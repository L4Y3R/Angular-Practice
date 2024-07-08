import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../data-models/items';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent implements OnInit {
  @Input() item: Item[];
  @Output() addToCart: EventEmitter<Item> = new EventEmitter<Item>();

  constructor() {}

  ngOnInit(): void {}

  buyItem(item: Item) {
    this.addToCart.emit(item);
  }
}
