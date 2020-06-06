import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IProduct } from 'src/app/shared/models/product';
import { GlobalErrorHandlerService } from 'src/app/system/error/helpers/global-error-handler.service';


@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class ProductService {
  private productUrl = 'api/products/products.json';

  constructor(
    private http: HttpClient,
    private err: GlobalErrorHandlerService) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.err.handleError)
    );
  }
}



  // private handleError(err: HttpErrorResponse) {
  //   // in a real world app, we may send the server to some remote logging infrastructure
  //   // instead of just logging it to the console
  //   let errorMessage = '';
  //   if (err.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     errorMessage = `An error occurred: ${err.error.message}`;
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  //   }
  //   console.error(errorMessage);
  //   // rou
  //   return throwError(errorMessage);
  // }
