import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home/home.component';

import { OwlCarousel } from './home/owl-carousel.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent, 
    HomeComponent,
    OwlCarousel 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
