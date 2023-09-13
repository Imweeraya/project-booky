import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { CartModel } from '../model/storeModel/cart.model';


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
      title: 'ลบรายการ',
      text: "คุณต้องการลบรายการสินค้านี้หรือไม่?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'ยกเลิก',
      confirmButtonText: 'ยืนยัน',
    }).then((result) => {
      if (result.isConfirmed) {
        this.cart.removeLine(id ?? 0);
        Swal.fire('ลบแล้ว!', 'ลบรายการสินค้าแล้ว', 'success');
      }
    });
  }

  deleteAll() {
    Swal.fire({
      title: 'ลบรายการทั้งหมด',
      text: "คุณต้องการลบรายการสินค้าทั้งหมดหรือไม่?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'ยกเลิก',
      confirmButtonText: 'ยืนยัน',
    }).then((result) => {
      if (result.isConfirmed) {
        this.cart.clear();
        Swal.fire('ลบแล้ว!', 'ลบรายการสินค้าทั้งหมดแล้ว', 'success');
      }
    });
  }

  goBack() {
    window.history.go(-2);
  }

}
