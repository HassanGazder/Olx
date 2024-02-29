import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(public seller:SellerService , public router:Router){}
  signup(data: object) {
    console.log(data);

    this.seller.usersignup(data).subscribe((result)=>{
      console.log(result)
    })
  }


}
