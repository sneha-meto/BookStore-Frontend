import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.css']
})
export class WishlistPageComponent implements OnInit {

  id:any;
  wishItems:any[]=[];
  public baseUrl='/assets/bookstore/';

  constructor(private dataService: DataService, private activatedRoute:ActivatedRoute,private router :Router) {
    this.id=activatedRoute.snapshot.paramMap.get('id');
    dataService.getWishlistById(this.id).subscribe((data:any)=>{this.wishItems= data});
   }

  ngOnInit(): void {
  }

    
  goToDetail(pdtId:any){
    this.router.navigateByUrl(`products/details/${pdtId}`)
  }

  
  addToCart(id:any){
      
    var item =
    { "Qty": 1,
      "BookId": Number(id),
      "UserId": localStorage.getItem('userId')}

    this.dataService.addToCart(item).subscribe((res)=>{console.log(res)})

    this.router.navigateByUrl(`cart/${localStorage.getItem('userId')}`)

  }
  remove(id:any){
    this.dataService.removeFromWishlist(id).subscribe((res)=>{
      console.log(res)
    })

    location.reload()
  }



}
