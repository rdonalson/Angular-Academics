import { ChangeDetectionStrategy, Component } from '@angular/core';

import { catchError, EMPTY, Subscription } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListAltComponent {
  pageTitle = 'Products';
  errorMessage = '';

  /**
   * Products$  of product list alt component
   */
  products$ = this.productService.productsWithCategory$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );

  selectedProduct$ = this.productService.selectedProduct$;

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
    this.productService.selectedProductChanged(productId);
  }
}
