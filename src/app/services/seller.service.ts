import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(public http:HttpClient) {
  }
  sellersignup(data:any){
    return this.http.post("http://localhost:3000/sellerauth",data)
  }

  userlogin(data:any){
    return this.http.post("http://localhost:3000/userlogin",data)
  }
  usersignup(data:any){
    return this.http.post("http://localhost:3000/usersignup",data)
  }
  addproduct(data:any){
    return this.http.post("http://localhost:3000/addproduct",data)
  }
}
