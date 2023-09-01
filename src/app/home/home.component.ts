import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor() { }
    current_img = 1;
    //srcimage = "../assets/img/cat1.jpg";

    change_img_plus(){
      if(this.current_img<3){
        this.current_img++
      }else{
        this.current_img  = 1
      }
    }

    change_img_minus(){
      if(this.current_img>1){
        this.current_img--
      }else{
        this.current_img  = 3
      }
    }
    
}
