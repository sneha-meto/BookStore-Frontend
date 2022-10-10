import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFloppyDisk, faPenToSquare, faStar} from '@fortawesome/free-solid-svg-icons';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket as faLogout} from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import { faCircleMinus} from '@fortawesome/free-solid-svg-icons';
import { faUserGroup} from '@fortawesome/free-solid-svg-icons';
import { faTags} from '@fortawesome/free-solid-svg-icons';
import { faGrip} from '@fortawesome/free-solid-svg-icons';
import { faBook} from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import { faRightLeft} from '@fortawesome/free-solid-svg-icons';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ListingPageComponent } from './pages/listing-page/listing-page.component';
import { ProductsComponent } from './components/products/products.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { ThankyouPageComponent } from './pages/thankyou-page/thankyou-page.component';
import { AddressComponent } from './components/address/address.component';
import { WishlistPageComponent } from './pages/wishlist-page/wishlist-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { AdminHomePageComponent } from './pages/admin-home-page/admin-home-page.component';
import { AdminOrdersPageComponent } from './pages/admin-orders-page/admin-orders-page.component';
import { AdminCouponsPageComponent } from './pages/admin-coupons-page/admin-coupons-page.component';
import { AdminBooksPageComponent } from './pages/admin-books-page/admin-books-page.component';
import { AdminUsersPageComponent } from './pages/admin-users-page/admin-users-page.component';
import { AdminCategoriesPageComponent } from './pages/admin-categories-page/admin-categories-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    CategoriesComponent,
    HeaderComponent,
    FooterComponent,
    ProductPageComponent,
    ListingPageComponent,
    ProductsComponent,
    CartPageComponent,
    CouponsComponent,
    ThankyouPageComponent,
    AddressComponent,
    WishlistPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SearchPageComponent,
    AdminHomePageComponent,
    AdminOrdersPageComponent,
    AdminCouponsPageComponent,
    AdminBooksPageComponent,
    AdminUsersPageComponent,
    AdminCategoriesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {   
  constructor(library: FaIconLibrary) {
  library.addIcons(faStar);
  library.addIcons(faCartShopping);
  library.addIcons(faHeart);
  library.addIcons(faMagnifyingGlass);
  library.addIcons(faLogout);
  library.addIcons(faCirclePlus);
  library.addIcons(faCircleMinus);
  library.addIcons(faBook);
  library.addIcons(faShoppingBag);
  library.addIcons(faGrip);
  library.addIcons(faUserGroup);
  library.addIcons(faTags);
  library.addIcons(faRightLeft);
  library.addIcons(faPenToSquare);
  library.addIcons(faFloppyDisk);

}}
