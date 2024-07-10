import { Injectable } from '@angular/core';
import { Item } from '../data-models/items';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  listItemUrl = 'assets/be-server-mocks/items.json';
  constructor(private http: HttpClient) {}

  getItemList() {
    return this.http.get<Item[]>(this.listItemUrl, { observe: 'response' });
  }
}
