import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';

@Component({
  selector: 'book-page',
  templateUrl: './bookpage.component.html',
})
export class Bookpage {

  selectedCategory = "0";
  selectedgenre? = "all";
  productsPerPage = 8;
  selectedPage = 1;

  constructor(
    private repository: ProductRepository,
  ) {}

  get products(): Product[] {
    //return this.repository.getProducts();
    //return this.repository.getProducts(this.selectedCategory);
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository
      .getProductsCategory(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  changeGenre(newGenre?: string) {
    this.selectedgenre = newGenre;
  }



}