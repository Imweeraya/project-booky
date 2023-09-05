import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { CartModel } from '../model/cart.model';
import { Product } from '../model/product.model';

@Component({
  selector: 'cart',
  templateUrl: 'cart.component.html',
})
export class Cart {

  constructor(
    public cart: CartModel
    ) {
  }


  deleteProduct(id : number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.cart.removeLine(id ?? 0);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }
}
