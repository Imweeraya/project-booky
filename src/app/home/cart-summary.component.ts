import { Component } from '@angular/core';
import { CartModel } from '../model/cart.model';

@Component({
  selector: 'cart-summary',
  templateUrl: 'cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent {


  constructor(public cart: CartModel) {
  }
}
