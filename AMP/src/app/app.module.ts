import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './system/page-not-found/page-not-found.component';
import { GlobalErrorComponent } from './system/error/global-error/global-error.component';
import { GlobalErrorHandlerService } from './system/error/helpers/global-error-handler.service';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    GlobalErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule],
  providers: [
    GlobalErrorHandlerService,
    { provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
