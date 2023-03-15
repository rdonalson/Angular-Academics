import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { TapComponent } from './tap/tap.component';
import { TakeComponent } from './take/take.component';
import { FromComponent } from './from/from.component';
import { CatchErrorComponent } from './catch-error/catch-error.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    TapComponent,
    TakeComponent,
    FromComponent,
    CatchErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
