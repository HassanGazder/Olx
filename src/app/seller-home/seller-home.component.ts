import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SellerService } from '../services/seller.service';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  userdata: any;

  constructor(private http: HttpClient, public router:Router, public route:ActivatedRoute, public service:SellerService) { }
  adduser(){
this.router.navigate(['sellerauth'])
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['updateseller']) {
        this.userdata = JSON.parse(params['updateseller']);
      } else {
        this.fetchUserData();
      }
    });

   
  }
   fetchUserData() {
    this.http.get('http://localhost:3000/sellerauth').subscribe(
      (data: any) => {
        this.userdata = data;
      },
    );
  }
  deleteuser(index: number) {
    // Get the ID of the user to be deleted
    const userId = this.userdata[index].id; // Adjust this according to your data structure

    // Send a request to delete the user with the corresponding ID from the API
    this.http.delete(`http://localhost:3000/sellerauth/${userId}`).subscribe(
      () => {
        // Upon successful deletion from the API, update the UI by removing the user
        this.userdata.splice(index, 1);
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }


  updateUser(index: number, updatedUserData: any) {
    const userId = this.userdata[index].id; 
    this.http.put(`http://localhost:3000/sellerauth/${userId}`, updatedUserData).subscribe(
      (response: any) => {
        this.userdata[index] = response; // Update the userdata with the response data
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }
  navigateToUpdateForm(user: any) {
    this.router.navigate(['updateseller', { user: JSON.stringify(user) }]);
  }
}
