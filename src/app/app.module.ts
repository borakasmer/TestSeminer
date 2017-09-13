import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ShopService } from './Services/shopService';
import { OnlyNumber } from './Services/onlyNumber';

@NgModule({
  declarations: [
    AppComponent,
    OnlyNumber
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
