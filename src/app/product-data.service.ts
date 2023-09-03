import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  private productId! : number;

  setProductId(id: number) {
    this.productId = id;
  }

  getProductId(): number {
    return this.productId;
  }
}
