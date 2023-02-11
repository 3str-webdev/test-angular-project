import { IProduct } from './../models/product';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import {
  Observable,
  catchError,
  throwError,
  retry,
  map,
  BehaviorSubject,
  tap,
} from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url: string;
  products: IProduct[] = [];

  constructor(private http: HttpClient, private errorService: ErrorService) {
    this.url = 'https://fakestoreapi.com/products';
  }

  getAll(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(this.url, {
        params: new HttpParams({
          fromObject: {
            limit: 5,
          },
        }),
      })
      .pipe(
        retry(2),
        tap((products) => (this.products = products)),
        catchError(this.errorHandler.bind(this))
      );
  }

  createProduct(product: IProduct): Observable<IProduct> {
    return this.http
      .post<IProduct>(this.url, product)
      .pipe(tap((newProduct) => this.products.push(newProduct)));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
