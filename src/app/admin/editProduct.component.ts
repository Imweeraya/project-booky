import { Component } from '@angular/core';
import { Product } from '../model/storeModel/product.model';
import { ProductDataService } from '../product-data.service';
import { ProductRepository } from '../model/storeModel/product.repository';
import { ApiService } from 'src/api.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'edit-product',
  templateUrl: './editProduct.component.html',
})
export class EditProduct {
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

  submitted: boolean = false;

  constructor(
    private productDataService: ProductDataService,
    private repository: ProductRepository,
    private apiService: ApiService,
    private router: Router
  ) {
    this.productName = this.product.name || '';
    this.productInfo = this.product.info || '';
    this.productImage = this.product.img || [];
    this.productQuantity = this.product.stock || 0;
    this.productRate = this.product.rate || 0;
    this.productPrice = this.product.price || 0;
    this.selectedCategory = this.product.category || '';
    this.selectedGenre = this.product.genre || '';

    this.imgLink = this.imgTolink();
    this.selectedValue = this.selectCatagoryGenre();
  }

  get product(): Product {
    const product = this.repository.getProductByID(
      this.productDataService.getProductId()
    );
    //const product = this.repository.getProductByID(this.id);
    return product ? product : {}; //check if it have? if not return nothing
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

  imgTolink() {
    const link: string = this.productImage.join(', ');
    return link;
  }

  selectCatagoryGenre() {
    const selected: string = this.selectedCategory + ',' + this.selectedGenre;
    return selected;
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      Swal.fire({
        title: 'คุณต้องการแก้ไขสินค้านี้หรือไม่',
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
          this.submitted = false;
          this.img();
          this.product.name = this.productName;
          this.product.rate = this.productRate;
          this.product.category = this.selectedCategory;
          this.product.genre = this.selectedGenre;
          this.product.info = this.productInfo;
          this.product.img = this.productImage;
          this.product.stock = this.productQuantity;
          this.product.price = this.productPrice;

          const proID = this.product.id?.toString() || '';
          this.apiService.updateProductData(proID, this.product);

          console.log('Data sent successfully:');
          Swal.fire({
            title: 'แก้ไขสินค้าแล้ว!',
            text: 'รีเฟรชเพื่อตรวจสอบสินค้า BoOkY ♡',
            imageUrl:
              'https://storage.googleapis.com/sticker-prod/sX90U4BNjjsjvGRuqTnk/4-2.thumb128.png',
            imageHeight: 100,
          });

          this.router.navigateByUrl('/check-product');
        }
      });
    }
  }
}
