import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModelModule } from '../model/model.module';
import { NavAdmin } from './nav-admin.component';
import { AdminLogin } from './adminLogin.component';

@NgModule({
    imports: [ ModelModule,BrowserModule, FormsModule, RouterModule],
    declarations: [
      NavAdmin,
      AdminLogin
    ],
    exports: [],
  })
  export class AdminModule {}