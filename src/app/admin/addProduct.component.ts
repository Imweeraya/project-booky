import { Component } from '@angular/core';

@Component({
  selector: 'add-product',
  templateUrl: './addProduct.component.html',
})
export class AddProduct {
  selectedValue: string
  selectedCatagory: string;
  selectedGenre: string;
  


  constructor() {
    this.selectedValue = '';
    this.selectedCatagory = '';
    this.selectedGenre = '';
  }




}
