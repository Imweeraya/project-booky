import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'cart',
  templateUrl: 'cart.component.html',
})
export class Cart {
  quantity: number;
  stock: number;
  constructor() {
    this.quantity = 1;
    this.stock = 100;
  }

  increase() {
    if (this.quantity < this.stock) {
      this.quantity++;
    }
  }

  decrease() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  deleteProduct() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
  }

}
