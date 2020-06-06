import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';
import { StarComponent } from './components/star/star.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [],
  exports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ConvertToSpacesPipe,
    StarComponent
  ]
})
export class SharedModule { }
