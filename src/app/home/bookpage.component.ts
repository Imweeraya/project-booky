import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';

@Component({
  selector: 'book-page',
  templateUrl: './bookpage.component.html',
})
export class Bookpage {

  selectedCategory = "0";
  selectedgenre = "all";
  productsPerPage = 8;
  selectedPage = 1;

  constructor(
    private repository: ProductRepository,
  ) {}

  get products(): Product[] {
    this.selectedPage = 1;
    if(this.selectedgenre=="all"){
      return this.repository.getProductsCategory(this.selectedCategory);
    }else{
      return this.repository.getProductsGenre(this.selectedgenre);
    }
  }

  // changeGenre(newGenre?: string) {
  //   this.selectedgenre = newGenre;
  // }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }




}