import { Component, EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBar {

  keyword: string;

  constructor(private router: Router) { 
    this.keyword ="";
  }
  
  @Output() sendkeyword: EventEmitter<string> = new EventEmitter();

  setkeyword(key: string) {
    this.keyword = key;
    this.sendkeyword.emit(this.keyword);
  }

  

  changerepository() {
    this.router.navigateByUrl('/booky');
  }

}
