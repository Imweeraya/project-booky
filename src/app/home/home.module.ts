import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { CartSummaryComponent } from './cart-summary.component';
import { HomeComponent } from './home.component';

import { RouterModule } from '@angular/router';
import { NavBar } from './nav-bar.component';
import { Footer } from './footer.component';
import { Bookpage } from './bookpage.component';
import { Detail } from './detail.component';
import { Checkout } from './checkout.component';
import { Cart } from './cart.component';
import { ModelModule } from '../model/model.module';
import { Filter } from './filter-result.component';



@NgModule({
  imports: [ ModelModule,BrowserModule, FormsModule, RouterModule],
  declarations: [
    HomeComponent,
    CartSummaryComponent,
    NavBar,
    Footer,
    Bookpage,
    Detail,
    Checkout,
    Cart,
    Filter
  ],
  exports: [],
})
export class HomeModule {}