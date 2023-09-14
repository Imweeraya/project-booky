import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModelModule } from '../model/model.module';
import { NavAdmin } from './nav-admin.component';
import { AdminLogin } from './adminLogin.component';
import { CheckProduct } from './checkProduct.component';
import { EditProduct } from './editProduct.component';
import { AddProduct } from './addProduct.component';
import { FilterAdmin } from './filterAdmin-result.component';

@NgModule({
    imports: [ ModelModule,BrowserModule, FormsModule, RouterModule],
    declarations: [
      NavAdmin,
      AdminLogin,
      CheckProduct,
      EditProduct,
      AddProduct,
      FilterAdmin

    ],
    exports: [],
  })
  export class AdminModule {}