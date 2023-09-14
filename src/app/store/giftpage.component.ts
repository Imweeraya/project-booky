import { Component} from '@angular/core';
import { ProductRepository } from '../model/storeModel/product.repository';
import { Product } from '../model/storeModel/product.model';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'gift-page',
  templateUrl: './giftpage.component.html',
})
export class Giftpage {
  selectedCategory: string;
  selectedgenre: string;
  productsPerPage: number;
  selectedPage: number;
  productID: number;

  constructor(
    private productDataService: ProductDataService,
    private repository: ProductRepository
  ) {
    this.productID = 0;
    this.selectedPage = 1;
    this.productsPerPage = 8;
    this.selectedgenre = 'all';
    this.selectedCategory = 'ของเล่น & ของขวัญ';
  }

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;

    if (this.selectedgenre === 'all') {
      return this.repository
        .getProductsCategory(this.selectedCategory)
        .slice(pageIndex, pageIndex + this.productsPerPage);
    } else {
      return this.repository
        .getProductsGenre(this.selectedgenre)
        .slice(pageIndex, pageIndex + this.productsPerPage);
    }
  }

  get pageNumbers(): number[] {
    let totalProducts: Product[];
    
    if (this.selectedgenre === 'all') {
      totalProducts = this.repository.getProductsCategory(this.selectedCategory);
    } else {
      totalProducts = this.repository.getProductsGenre(this.selectedgenre);
    }
  
    const totalPages = Math.ceil(totalProducts.length / this.productsPerPage);
    console.log('Total pages:', totalPages);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }
  

  changePage(newPage: number) {
    console.log('Changing to page:', newPage);
    this.selectedPage = newPage;
  }

  // changeGenre(newGenre?: string) {
  //   this.selectedgenre = newGenre;
  // }

  setID(productId?: number) {
    this.productID = productId !== undefined ? productId : 0; // Check for undefined
    this.productDataService.setProductId(this.productID); // Call the setProductId method with the value
  }
}
