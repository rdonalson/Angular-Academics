import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Paths } from '../shared/models/paths';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailGuard } from '../shared/guards/product-detail.guard';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: Paths.products, component: ProductListComponent },
  { path: Paths.products + '/:id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
