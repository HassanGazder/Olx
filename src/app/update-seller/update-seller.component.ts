import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-update-seller',
  templateUrl: './update-seller.component.html',
  styleUrls: ['./update-seller.component.css']
})
export class UpdateSellerComponent {
  userToUpdate: any;

  constructor(private route: ActivatedRoute,private router: Router, public http :HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userToUpdate = JSON.parse(params['user']); 
    });
  }
  
  updateUser() {
    const userId = this.userToUpdate.id; // Adjust this according to your data structure

    this.http.put(`http://localhost:3000/sellerauth/${userId}`, this.userToUpdate).subscribe(
      (response: any) => {
        // Upon successful update from the API, update the UI with the new data
        // You might need to reload the page or fetch updated data from the API
        this.router.navigate(['sellerhome']); // Redirect back to the seller home page
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }
}
