import { Component } from '@angular/core';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
})
export class Detail {
  quantity: number;
  stock:number;

  constructor() {
    this.quantity = 1;
    this.stock = 100;
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

  // Define an array of image paths
  imagePaths: string[] = [
    '../assets/img/cat1.jpg',
    '../assets/img/cat2.jpg',
    '../assets/img/cat3.jpg',
  ];

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
      this.current_img = 3;
    }
  }

  change_img(newImg: number) {
    this.current_img = newImg;
  }
}