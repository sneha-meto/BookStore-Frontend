import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id:any;

  constructor(private auth: AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.auth.logout()
    this.router.navigateByUrl('login')
  }

  check(){
    return this.auth.checkToken()
  }

  goToWishlist(){
    this.id =localStorage.getItem('userId');
    this.router.navigateByUrl(`wishlist/${this.id}`)
  }

  goToCart(){
    this.id =localStorage.getItem('userId');
    this.router.navigateByUrl(`cart/${this.id}`)
  }

  goToSearch(){
    this.router.navigateByUrl(`search`)
  }
}
