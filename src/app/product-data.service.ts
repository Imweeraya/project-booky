import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  private productId! : number;
  private filterKey! : string;

  setProductId(id: number) {
    this.productId = id;
  }

  getProductId(): number {
    return this.productId;
  }

  setFilterKey(key : string){
    this.filterKey = key;
  }

  getFilterKey(): string {
    return this.filterKey;
  }

  

}
