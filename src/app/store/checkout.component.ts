import { Component } from '@angular/core';
import { CartModel } from '../model/cart.model';
import { Order } from '../model/order.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'checkout',
  templateUrl: 'checkout.component.html',
})
export class Checkout {
  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(
    public cart: CartModel,
    public order: Order,
    private router: Router
  ) {}

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      Swal.fire({
        title: 'ยืนยันคำสั่งซื้อ',
        text: 'กรุณาตรวจสอบความถูกต้องของข้อมูลให้ครบถ้วนก่อนกดยืนยัน',
        imageUrl:
          'https://storage.googleapis.com/sticker-prod/sX90U4BNjjsjvGRuqTnk/9-2.thumb128.png',
        imageHeight: 100,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'ยกเลิก',
        confirmButtonText: 'ยืนยัน',
      }).then((result) => {
        if (result.isConfirmed) {
          this.order.clear();
          //this.orderSent = true;
          this.submitted = false;
          this.router.navigateByUrl('/booky');
          Swal.fire({
            title: 'สั่งซื้อสินค้าแล้ว!',
            text: 'ขอบคุณที่ใช้บริการ BoOkY ♡',
            imageUrl:
              'https://storage.googleapis.com/sticker-prod/sX90U4BNjjsjvGRuqTnk/4-2.thumb128.png',
            imageHeight: 100,
          });
        }
      });
    }
  }
}
