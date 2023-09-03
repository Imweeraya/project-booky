import { Component, EventEmitter, Output } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'book-page',
  templateUrl: './bookpage.component.html',
})
export class Bookpage {

  selectedCategory:string;
  selectedgenre:string;
  productsPerPage:number;
  selectedPage:number;
  productID:number;

  constructor(
    private productDataService: ProductDataService,
    private repository: ProductRepository,
  ) {
    this.productID = 0;
    this.selectedPage = 1;
    this.productsPerPage = 8;
    this.selectedgenre = "all";
    this.selectedCategory = "หนังสือ";
  }

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


  setID(productId?: number) {
  this.productID = productId !== undefined ? productId : 0; // Check for undefined
  this.productDataService.setProductId(this.productID); // Call the setProductId method with the value
}

  

}