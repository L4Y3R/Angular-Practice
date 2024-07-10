import { Injectable } from '@angular/core';
import { Item } from '../data-models/items';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  listItemUrl = 'assets/be-server-mocks/items.json';
  constructor(private http: HttpClient) {}

  getItemList() {
    const observe = { observe: 'response' as const };
    return this.http
      .get<Item[]>(this.listItemUrl, observe)
      .pipe(retry(2), catchError(this.handleError));
  }

  private handleError(err, caught): Observable<any> {
    if (err.status === 0) {
      //client side error
      console.error('An error occured in client side: ', err.error);
    } else {
      //server side error
      console.error(
        'An error occure in server side: ',
        err.error,
        'Status code: ',
        err.status
      );
    }
    throw 'An error occured, try again';
  }
}
