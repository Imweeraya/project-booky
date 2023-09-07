import { Component } from '@angular/core';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'check-product',
  templateUrl: './checkProduct.component.html',
})
export class CheckProduct {
  type: string;
  genre: string;

  constructor(private productDataService: ProductDataService) {
    this.type = 'all';
    this.genre = 'all';
  }

  setkeyword(key: string) {
    this.productDataService.setFilterKey(key);
  }
}
