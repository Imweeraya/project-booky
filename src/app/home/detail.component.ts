import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
})
export class Detail {
  quantity: number;
  stock:number;
  id:number;
  
  // Define an array of image paths
  imagePaths: string[];

  constructor(
    private productDataService: ProductDataService,
    private repository: ProductRepository
    ) {
    this.id = 2 ;
    //this.id = this.product.id ?? 0;

    this.quantity = 1;
    this.stock = this.product.stock ?? 0;
    this.imagePaths = this.product.img ?? [];
   }

   getIDproduct(){
    this.id = this.productDataService.getProductId();
   }

   get product() : Product{
    //const product = this.repository.getProductByID(this.productDataService.getProductId());
    const product = this.repository.getProductByID(this.id);
    return product ? product : {}; //check if it have? if not return nothing
  }

  setID(recieveID : number){
    this.id = recieveID;
  }


   increase() {
    if(this.quantity>this.stock){
      this.quantity = this.stock;
    }
    if (this.quantity < this.stock) {
      this.quantity++;
    }
  }

  decrease() {
    if(this.quantity>this.stock){
      this.quantity = this.stock;
    }
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  current_img = 1;

  

  change_img_plus() {
    if (this.current_img < this.imagePaths.length) {
      this.current_img++;
    } else {
      this.current_img = 1;
    }
  }

  change_img_minus() {
    if (this.current_img > 1) {
      this.current_img--;
    } else {
      this.current_img = this.imagePaths.length;
    }
  }

  change_img(newImg: number) {
    this.current_img = newImg;
  }


}