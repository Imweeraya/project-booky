import { Injectable } from '@angular/core';
import { CartModel } from './cart.model';

@Injectable()
export class Order {
  public id?: number;
  public name?: string;
  public lastname?: string;
  public email?: string;
  public address?: string;
  public phone?: string;
  public payment?: string;
  public shipped: boolean = false;

  constructor(public cart: CartModel) {}

  clear() {
    this.id = undefined;
    this.name = this.address = this.phone = this.lastname = this.email = undefined;
    this.shipped = false;
    this.cart.clear();
  }
}
