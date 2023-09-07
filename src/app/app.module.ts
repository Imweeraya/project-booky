import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { AdminModule } from './admin/admin.module';
import { HomeComponent } from './store/home.component';

import { StoreModule } from './store/store.module';
import { Bookpage } from './store/bookpage.component';
import { Detail } from './store/detail.component';
import { Checkout } from './store/checkout.component';
import { Cart } from './store/cart.component';
import { Filter } from './store/filter-result.component';
import { AdminLogin } from './admin/adminLogin.component';
import { CheckProduct } from './admin/checkProduct.component';


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
    { path: 'admin-login', component: AdminLogin },
    { path: 'check-product', component: CheckProduct },
    { path: '**', redirectTo: '/booky' },
    
  ]),
  StoreModule , AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
