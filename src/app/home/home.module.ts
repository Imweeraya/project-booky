import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { CartSummaryComponent } from './cart-summary.component';
import { HomeComponent } from './home.component';

import { RouterModule } from '@angular/router';
import { NavBar } from './nav-bar.component';
import { Footer } from './footer.component';



@NgModule({
  imports: [ BrowserModule, FormsModule, RouterModule],
  declarations: [
    HomeComponent,
    CartSummaryComponent,
    NavBar,
    Footer
  ],
  exports: [],
})
export class HomeModule {}