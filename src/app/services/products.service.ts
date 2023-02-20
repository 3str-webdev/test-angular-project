import { addProduct } from './../store/actions/products.actions';
import { IProduct } from './../models/product';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, catchError, throwError, retry, tap } from 'rxjs';
import { ErrorService } from './error.service';
import { Store } from '@ngrx/store';
import { setProducts } from '../store/actions/products.actions';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url: string = 'https://fakestoreapi.com/products';
  products$: Observable<IProduct[]>;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    public store: Store<{ products: IProduct[] }>
  ) {
    this.products$ = store.select('products');
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
        tap((products) => this.store.dispatch(setProducts({ products }))),
        catchError(this.errorHandler.bind(this))
      );
  }

  getById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.url}/${id}`).pipe(
      retry(2),
      tap((product) => this.store.dispatch(addProduct({ product }))),
      catchError(this.errorHandler.bind(this))
    );
  }

  createProduct(product: IProduct): Observable<IProduct> {
    return this.http
      .post<IProduct>(this.url, product)
      .pipe(
        tap((newProduct) =>
          this.store.dispatch(addProduct({ product: newProduct }))
        )
      );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
