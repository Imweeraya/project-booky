import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'filter',
  templateUrl: './filter-result.component.html',
})
export class Filter {
  selectedCategory = '0';
  selectedgenre = 'all';
  productsPerPage = 8;
  selectedPage = 1;

  productID: number;

  recieveKeyword: string;

  constructor(private productDataService: ProductDataService,
    private repository: ProductRepository) {
    this.recieveKeyword = '';
    this.productID = 0;
  }

//   setRecieveKey(key:string){
//     this.recieveKeyword = key;
//     console.log(this.recieveKeyword)
//   }

  

  get products(): Product[] {
    return this.repository.filterProductByName(this.productDataService.getFilterKey());
  }

  setID(productId?: number) {
    this.productID = productId !== undefined ? productId : 0; // Check for undefined
    this.productDataService.setProductId(this.productID); // Call the setProductId method with the value
  }


}
