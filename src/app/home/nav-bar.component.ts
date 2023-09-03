import { Component, EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBar {

  keyword: string;

  constructor(private router: Router,
    private productDataService: ProductDataService) { 
    this.keyword ="";
  }
  
  // @Output() sendkeyword: EventEmitter<string> = new EventEmitter();

  setkeyword(key: string) {
    // this.keyword = key;
    // this.sendkeyword.emit(this.keyword);
    this.productDataService.setFilterKey(key);
  }

  

  changerepository() {
    this.router.navigateByUrl('/booky');
  }

}
