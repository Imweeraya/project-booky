import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './store/home.component';
import { StoreModule } from './store/store.module';
import { Bookpage } from './store/bookpage.component';
import { Detail } from './store/detail.component';
import { Checkout } from './store/checkout.component';
import { Cart } from './store/cart.component';
import { Filter } from './store/filter-result.component';

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
    { path: 'filter-result', component: Filter },
    { path: '**', redirectTo: '/booky' },
    
  ]),
  StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
