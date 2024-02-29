import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  constructor (public seller:SellerService,public router:Router){}
  signup(data:object):void{
    console.log(data)

    this.seller.sellersignup(data).subscribe((result)=>{
      if (result) {
        this.router.navigate(['sellerhome'])
      }
    })
  }
}
