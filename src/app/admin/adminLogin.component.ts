import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'Login-page',
  templateUrl: './adminLogin.component.html',
})
export class AdminLogin {
    username: string = '';
    password: string = '';

    adminUsername = "";
    adminPassword = "";


  
    constructor(private router: Router) {}
  
    onSubmit() {
      if (this.username === this.adminUsername && this.password === this.adminPassword) {
        // Navigate to the home page on successful login
        this.router.navigate(['/check-product']);
      } else {
        Swal.fire({
            icon: 'error',
            title: 'ชื่อบัญชี หรือ รหัสผ่านไม่ถูกต้อง',
            text: 'กรุณากรอกใหม่อีกครั้ง',
          })
      }
    }
}
