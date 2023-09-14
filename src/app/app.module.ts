import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


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
import { EditProduct } from './admin/editProduct.component';
import { AddProduct } from './admin/addProduct.component';
import { Artpage } from './store/artpage.component';
import { Gatjetpage } from './store/gatjetpage.component';
import { Giftpage } from './store/giftpage.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    
    RouterModule.forRoot([
    { path: 'booky', component: HomeComponent },
    {path: 'booky-book' , component: Bookpage},
    { path: 'booky-art', component: Artpage },
    { path: 'booky-gatjet', component:  Gatjetpage },
    { path: 'booky-gift', component:  Giftpage },
    { path: 'detail', component: Detail },
    { path: 'cart', component: Cart },
    { path: 'checkout', component: Checkout },
    { path: 'filter-result', component: Filter },
    { path: 'admin-login', component: AdminLogin },
    { path: 'check-product', component: CheckProduct },
    { path: 'edit-product', component: EditProduct },
    { path: 'add-product', component: AddProduct },
    { path: '**', redirectTo: '/booky' },
    
  ]),
  StoreModule , AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
