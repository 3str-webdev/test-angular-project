import { IProduct } from './../../models/product';
import { createReducer, on } from '@ngrx/store';
import { setProducts, addProduct } from '../actions/products.actions';

const initialState: IProduct[] = [];

export const productsReducer = createReducer(
  initialState,
  on(setProducts, (state, { products }) => [...products]),
  on(addProduct, (state, { product }) => [...state, product])
);
