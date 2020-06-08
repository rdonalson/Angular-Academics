import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './system/page-not-found/page-not-found.component';
import { Paths } from './shared/models/paths';
import { PathResolveService } from './shared/services/path-resolve.service';
import { GlobalErrorComponent } from './system/error/global-error/global-error.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: Paths.home, component: WelcomeComponent },
  { path: Paths.about, component: AboutComponent },
  { path: '', redirectTo: Paths.home, pathMatch: 'full' },
  { path: '**', resolve: {
      path: PathResolveService
    }, component: PageNotFoundComponent },
  { path: Paths.error, component: GlobalErrorComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
