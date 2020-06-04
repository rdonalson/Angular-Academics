import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ConvertToSpacesPipe } from './shared/pipes/convert-to-spaces.pipe';
import { StarComponent } from './shared/components/star/star.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
