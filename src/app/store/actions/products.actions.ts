import { IProduct } from './../../models/product';
import { createAction, props } from '@ngrx/store';

export const setProducts = createAction(
  '[ProductList Component] Set',
  props<{ products: IProduct[] }>()
);

export const addProduct = createAction(
  '[ProductList Component] Add product',
  props<{ product: IProduct }>()
);
