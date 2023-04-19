import { createAction, props } from "@ngrx/store";
import { Product } from "../product";

export const toggleProductCode = createAction('[Product] Toggle Product Code');

/** Product */
export const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  props<{ product: Product }>()
  );

export const clearCurrentProduct = createAction('[Product] Clear Current Product');

export const initializeCurrentProduct = createAction('[Product] Init Current Product');

/** Products */
export const loadProducts = createAction('[Product] Load')

export const loadProductsSuccess = createAction(
  '[Product] Load Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product] Load Failure',
  props<{ error: string }>()
);



