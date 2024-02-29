import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(public seller:SellerService , public router:Router){}
  product = {
    pname: '',
    price: 0,
    pimage: '',
    pdescription: ''
  };

  onSubmit(data:object) {
    this.seller.addproduct(data).subscribe((result)=>{
      console.log(result)
    })
    // Handle form submission here, e.g., send data to server
    console.log(this.product);
    // Reset form after submission
    this.product = {
      pname: '',
      price: 0,
      pimage: '',
      pdescription: ''
    };
    this.router.navigate(['/'])
  }
}
