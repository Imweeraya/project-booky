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

   increase(){
    if(this.quantity<this.stock){
     this.quantity++ 
    }
    
   }

   decrease(){
    if(this.quantity>0){
      this.quantity--
    }
   }
}