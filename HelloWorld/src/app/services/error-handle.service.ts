import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandleService {
  constructor() {}

  handleError(err, caught): Observable<any> {
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
