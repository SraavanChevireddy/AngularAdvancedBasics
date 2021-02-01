import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ConvertToSpaces } from './shared/convert-to-space.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ConvertToSpaces
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
