import { Injectable } from '@angular/core';
import { Item } from '../data-models/items';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { ErrorHandleService } from './error-handle.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  listItemUrl = 'assets/be-server-mocks/items.json';
  constructor(
    private http: HttpClient,
    private errorHandle: ErrorHandleService
  ) {}

  getItemList() {
    const observe = { observe: 'response' as const };
    return this.http
      .get<Item[]>(this.listItemUrl, observe)
      .pipe(retry(2), catchError(this.errorHandle.handleError));
  }
}
