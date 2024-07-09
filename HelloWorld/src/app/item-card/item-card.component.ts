import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Item } from '../data-models/items';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent implements OnInit, OnChanges {
  @Input() item: Item;
  @Output() addToCart: EventEmitter<Item> = new EventEmitter<Item>();
  btnClasses: Record<string, boolean> = {};
  countFocus: Record<string, string> = {};

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.setBtnClases();
      this.setTextStyle();
    }
  }

  setTextStyle() {
    this.countFocus = {
      'font-weight': this.item.count < 4 ? 'bold' : 'normal',
    };
  }

  setBtnClases() {
    this.btnClasses = {
      btnDisable: this.item.count < 4,
      btnEnable: !(this.item.count < 4),
    };
  }

  buyItem(item: Item) {
    this.addToCart.emit(item);
  }
}
