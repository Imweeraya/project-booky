import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { Bookpage } from './home/bookpage.component';
import { Detail } from './home/detail.component';
import { Checkout } from './home/checkout.component';
import { Cart } from './home/cart.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot([
    { path: 'booky', component: HomeComponent },
    {path: 'booky-book' , component: Bookpage},
    { path: 'detail', component: Detail },
    { path: 'cart', component: Cart },
    { path: 'checkout', component: Checkout },
    { path: '**', redirectTo: '/booky' },
    
  ]),
  HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
