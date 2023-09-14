import { Component } from '@angular/core';
import { Product } from '../model/storeModel/product.model';
import { ApiService } from 'src/api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'add-product',
  templateUrl: './addProduct.component.html',
})
export class AddProduct {
  product: Product = new Product();

  productName: string;
  productRate: number;
  productInfo: string;
  productImage: string[];
  productQuantity: number;
  productPrice: number;
  selectedCategory: string;
  selectedGenre: string;

  imgLink: string;
  selectedValue: string;

  constructor(private apiService: ApiService, private router: Router) {
    this.productName = '';
    this.productInfo = '';
    this.productImage = [];
    this.productQuantity = 0;
    this.productRate = 0;
    this.productPrice = 0;
    this.selectedCategory = '';
    this.selectedGenre = '';

    this.imgLink = '';
    this.selectedValue = '';
  }

  onChange() {
    const arr = this.selectedValue.split(',');
    this.selectedCategory = arr[0];
    this.selectedGenre = arr[1];
  }

  img() {
    const Link = this.imgLink.split(',');
    for (let i = 0; i < Link.length; i++) {
      this.productImage.push(Link[i]);
    }
  }

  onSubmit() {
    Swal.fire({
      title: 'คุณต้องการเพิ่มสินค้านี้หรือไม่',
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
        this.img();
        this.product.name = this.productName;
        this.product.rate = this.productRate;
        this.product.category = this.selectedCategory;
        this.product.genre = this.selectedGenre;
        this.product.info = this.productInfo;
        this.product.img = this.productImage;
        this.product.stock = this.productQuantity;
        this.product.price = this.productPrice;
        this.apiService.postProductData(this.product).subscribe((response) => {
          console.log('Data sent successfully:', response);
          Swal.fire({
            title: 'เพิ่มสินค้าแล้วค้าแล้ว!',
            text: 'รีเฟรชเพื่อตรวจสอบสินค้า BoOkY ♡',
            imageUrl:
              'https://storage.googleapis.com/sticker-prod/sX90U4BNjjsjvGRuqTnk/4-2.thumb128.png',
            imageHeight: 100,
          });
        });
        this.router.navigateByUrl('/check-product');
      }
    });
  }
}
