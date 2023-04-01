import { createAction, createReducer, on } from "@ngrx/store";

export const productReducer = createReducer(
  { showProductCode: true},
  on(createAction('[Product] Toggle Product Code'), state => {
    // console.log('orginal state: ' + JSON.stringify(state));
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  })
);



