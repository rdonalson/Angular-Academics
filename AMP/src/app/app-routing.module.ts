import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './products/product-list/product-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { PageNotFoundComponent } from './system/page-not-found/page-not-found.component';
import { Paths } from './shared/models/paths';
import { PathResolveService } from './shared/services/path-resolve.service';
import { GlobalErrorComponent } from './system/error/global-error/global-error.component';
import { ProductDetailGuard } from './shared/guards/product-detail.guard';


const routes: Routes = [
  { path: Paths.home, component: WelcomeComponent },
  { path: Paths.error, component: GlobalErrorComponent },
  { path: Paths.products, component: ProductListComponent },
  { path: Paths.products + '/:id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent },
  { path: '', redirectTo: Paths.home, pathMatch: 'full' },
  { path: '**', resolve: {
      path: PathResolveService
    }, component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
