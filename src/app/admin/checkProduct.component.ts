import { Component } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { ProductRepository } from '../model/storeModel/product.repository';
import { Product } from '../model/storeModel/product.model';

@Component({
  selector: 'check-product',
  templateUrl: './checkProduct.component.html',
})
export class CheckProduct {
  selectedCategory: string;
  selectedgenre: string;
  productsPerPage: number;
  selectedPage: number;
  productID: number;
  selectedValue = 'all,all';

  constructor(
    private productDataService: ProductDataService,
    private repository: ProductRepository
  ) {
    this.productID = 0;
    this.selectedPage = 1;
    this.productsPerPage = 5;
    this.selectedgenre = 'all';
    this.selectedCategory = 'all';
  }

  onChange() {
    const arr = this.selectedValue.split(',');
    this.selectedCategory = arr[0];
    this.selectedgenre = arr[1];
    if (arr[1] === 'จิตวิทยา') {
      console.log('1');
    }
    this.selectedPage = 1;
  }

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    if (this.selectedCategory === 'all') {
      return this.repository
        .getAllProducts()
        .slice(pageIndex, pageIndex + this.productsPerPage);
    } else {
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
  }

  get pageNumbers(): number[] {
    let totalProducts: Product[];

    if (this.selectedCategory === 'all') {
      totalProducts = this.repository.getAllProducts();
    } else {
      if (this.selectedgenre === 'all') {
        totalProducts = this.repository.getProductsCategory(
          this.selectedCategory
        );
      } else {
        totalProducts = this.repository.getProductsGenre(this.selectedgenre);
      }
    }

    const totalPages = Math.ceil(totalProducts.length / this.productsPerPage);
    console.log('Total pages:', totalPages);
    return Array(totalPages)
      .fill(0)
      .map((x, i) => i + 1);
  }

  changePage(newPage: number) {
    console.log('Changing to page:', newPage);
    this.selectedPage = newPage;
  }

  setkeyword(key: string) {
    this.productDataService.setFilterKey(key);
  }
}
