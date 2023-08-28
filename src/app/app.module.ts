import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot([
    { path: 'booky', component: HomeComponent },
    { path: '**', redirectTo: '/booky' }
  ]),
  HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
