import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBar {

  constructor(private router: Router) { }


  changerepository() {
    this.router.navigateByUrl('/booky');
  }

 


}
