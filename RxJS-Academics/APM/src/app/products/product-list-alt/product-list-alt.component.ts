import { Component } from '@angular/core';

import { catchError, EMPTY, Subscription } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html'
})
export class ProductListAltComponent {
  pageTitle = 'Products';
  errorMessage = '';
  selectedProductId = 0;


  /**
   * Products$  of product list alt component
   */
  products$ = this.productService.products$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );


  /**
   * Creates an instance of product list alt component.
   * @param productService
   */
  constructor(private productService: ProductService) { }

  /**
   * Determines whether selected on
   * @param {number} productId
   */
  onSelected(productId: number): void {
    console.log('Not yet implemented');
  }
}
