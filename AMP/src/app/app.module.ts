import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ConvertToSpacesPipe } from './shared/pipes/convert-to-spaces.pipe';
import { StarComponent } from './shared/components/star/star.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { PageNotFoundComponent } from './system/page-not-found/page-not-found.component';
import { GlobalErrorComponent } from './system/error/global-error/global-error.component';
import { GlobalErrorHandlerService } from './system/error/helpers/global-error-handler.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent,
    PageNotFoundComponent,
    GlobalErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GlobalErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
