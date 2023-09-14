import { Component } from '@angular/core';
import { ProductRepository } from '../model/storeModel/product.repository';
import { Product } from '../model/storeModel/product.model';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'filter-admin',
  templateUrl: './filterAdmin-result.component.html',
})
export class FilterAdmin {
    selectedCategory: string;
    selectedgenre: string;
    productsPerPage: number;
    selectedPage: number;
    productID: number;
    selectedValue = "all,all"
  

  recieveKeyword: string;

  constructor(private productDataService: ProductDataService,
    private repository: ProductRepository) {
    this.recieveKeyword = '';
    this.productID = 0;
    this.selectedPage = 1;
    this.productsPerPage = 10;
    this.selectedgenre = 'all';
    this.selectedCategory = 'all';
  }


  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
  
    // Get the initial list of products based on the selected category or genre
    let productList: Product[] = [];
    if (this.selectedCategory === 'all') {
      productList = this.repository.getAllProducts();
    } else if (this.selectedgenre === 'all') {
      productList = this.repository.getProductsCategory(this.selectedCategory);
    } else {
      productList = this.repository.getProductsGenre(this.selectedgenre);
    }
  
    // Filter the products by name
    const filterKey = this.productDataService.getFilterKey();
    if (filterKey) {
      productList = productList.filter(product => product.name?.includes(filterKey));
    }
  
    // Apply pagination
    const paginatedProducts = productList.slice(pageIndex, pageIndex + this.productsPerPage);
  
    return paginatedProducts;
  }
  

  setID(productId?: number) {
    this.productID = productId !== undefined ? productId : 0; // Check for undefined
    this.productDataService.setProductId(this.productID); // Call the setProductId method with the value
  }

  changePage(newPage: number) {
    console.log('Changing to page:', newPage);
    this.selectedPage = newPage;
  }

  setkeyword(key: string) {
    this.productDataService.setFilterKey(key);
  }

  get pageNumbers(): number[] {
    let totalProducts: Product[];

    if (this.selectedgenre === 'all') {
      totalProducts = this.repository.getProductsCategory(
        this.selectedCategory
      );
    } else {
      totalProducts = this.repository.getProductsGenre(this.selectedgenre);
    }

    const totalPages = Math.ceil(totalProducts.length / this.productsPerPage);
    console.log('Total pages:', totalPages);
    return Array(totalPages)
      .fill(0)
      .map((x, i) => i + 1);
  }

  onChange() {
    const arr = this.selectedValue.split(",");
    this.selectedCategory = arr[0];
    this.selectedgenre = arr[1];
    if(arr[1] === "จิตวิทยา"){
      console.log("1");
    }
    this.selectedPage = 1;
  }





}
