import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SellerService } from '../services/seller.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: any[] = [];
  constructor(private http: HttpClient, public router:Router, public route:ActivatedRoute, public service:SellerService) { }
  
  ngOnInit(): void {
    this.http.get('http://localhost:3000/addproduct').subscribe((data:any) => {
      this.products = data;
    });    
  }
}
