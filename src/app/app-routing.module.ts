import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListingPageComponent } from './pages/listing-page/listing-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ThankyouPageComponent } from './pages/thankyou-page/thankyou-page.component';
import { WishlistPageComponent } from './pages/wishlist-page/wishlist-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { AdminHomePageComponent } from './pages/admin-home-page/admin-home-page.component';
import { AdminOrdersPageComponent } from './pages/admin-orders-page/admin-orders-page.component';
import { AdminCouponsPageComponent } from './pages/admin-coupons-page/admin-coupons-page.component';
import { AdminUsersPageComponent } from './pages/admin-users-page/admin-users-page.component';
import { AdminCategoriesPageComponent } from './pages/admin-categories-page/admin-categories-page.component';
import { AdminBooksPageComponent } from './pages/admin-books-page/admin-books-page.component';


const routes: Routes = [ 
  {path:"",redirectTo:"home", pathMatch:'full'}, 
  {path:"register",component:RegisterPageComponent},
  {path:"login",component:LoginPageComponent},
  {path:"home",component:HomePageComponent},
  {path:"products/:catId", component:ListingPageComponent},
  {path:"products/details/:id", component:ProductPageComponent},
  {path:"cart/:id",component:CartPageComponent},
  {path:"wishlist/:id",component:WishlistPageComponent},
  {path:"thankyou",component:ThankyouPageComponent},
  {path:"about",component:AboutPageComponent},
  {path:"contact",component:ContactPageComponent},
  {path:"search",component:SearchPageComponent},
  {path:"admin/home",component:AdminHomePageComponent},
  {path:"admin/orders",component:AdminOrdersPageComponent},
  {path:"admin/coupons",component:AdminCouponsPageComponent},
  {path:"admin/users",component:AdminUsersPageComponent},
  {path:"admin/categories",component:AdminCategoriesPageComponent},
  {path:"admin/books",component:AdminBooksPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
