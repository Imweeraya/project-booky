import { Component } from '@angular/core';;

@Component({
  selector: 'cart-summary',
  templateUrl: 'cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent {

  products_add:number ;

  constructor() {
    this.products_add = 0;
  }
}
