import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoginForm: boolean = true;
  toggleForm(): void {
    this.isLoginForm = !this.isLoginForm;
  }
  constructor(public seller:SellerService , public router:Router){}
  login(data: object) {
    console.log(data);

    this.seller.userlogin(data).subscribe((result)=>{
      console.log(result)
    })
  }
  signup(data: object) {
    console.log(data);

    this.seller.usersignup(data).subscribe((result)=>{
      console.log(result)
    })
  }
}
