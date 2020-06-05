import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './products/product-list/product-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { PageNotFoundComponent } from './system/page-not-found/page-not-found.component';
import { Paths } from './models/paths';
import { PathResolveService } from './shared/services/path-resolve.service';


const routes: Routes = [
  { path: Paths.products, component: ProductListComponent },
  { path: Paths.products + '/:id', component: ProductDetailComponent },
  { path: Paths.home, component: WelcomeComponent },
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
