import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor() {}
  current_img = 1;

  // Define an array of image paths
  imagePaths: string[] = [
    '../assets/img/cat1.jpg',
    '../assets/img/cat2.jpg',
    '../assets/img/cat3.jpg',
  ];

  change_img_plus() {
    if (this.current_img < this.imagePaths.length) {
      this.current_img++;
    } else {
      this.current_img = 1;
    }
  }

  change_img_minus() {
    if (this.current_img > 1) {
      this.current_img--;
    } else {
      this.current_img = 3;
    }
  }

  change_img(newImg: number) {
    this.current_img = newImg;
  }
}
