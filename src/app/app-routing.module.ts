import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerComponent } from './seller/seller.component';
import { HomeComponent } from './home/home.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { UpdateSellerComponent } from './update-seller/update-seller.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'sellerauth',
    component: SellerComponent,
  },
  {
    path: 'sellerhome',
    component: SellerHomeComponent,
  },
  {
    path: 'updateseller',
    component: UpdateSellerComponent,
  },
  {
    path: 'userlogin',
    component: LoginComponent,
  },
  {
    path: 'usersignup',
    component: SignupComponent,
  },
  {
    path: 'addproduct',
    component: AddProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
