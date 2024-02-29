import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(public seller:SellerService , public router:Router){}
  login(data: object) {
    console.log(data);

    this.seller.userlogin(data).subscribe((result)=>{
      console.log(result)
    })
  }
}
