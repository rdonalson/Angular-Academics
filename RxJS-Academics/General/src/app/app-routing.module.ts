import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatchErrorComponent } from './catch-error/catch-error.component';
import { FromComponent } from './from/from.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { TakeComponent } from './take/take.component';
import { TapComponent } from './tap/tap.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'tap', component: TapComponent },
  { path: 'take', component: TakeComponent },
  { path: 'from', component: FromComponent },
  { path: 'catch-error', component: CatchErrorComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
