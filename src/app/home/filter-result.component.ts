import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';

@Component({
  selector: 'filter',
  templateUrl: './filter-result.component.html',
})
export class Filter {
  selectedCategory = '0';
  selectedgenre = 'all';
  productsPerPage = 8;
  selectedPage = 1;

  recieveKeyword: string;

  constructor(private repository: ProductRepository) {
    this.recieveKeyword = '';
  }

  setRecieveKey(key:string){
    this.recieveKeyword = key;
    console.log(this.recieveKeyword)
  }

  

  get products(): Product[] {
    this.selectedPage = 1;
    if (this.recieveKeyword == '') {
      return this.repository.getAllProducts();
    } else {
      return this.repository.filterProductByName(this.recieveKeyword);
    }
  }

}
