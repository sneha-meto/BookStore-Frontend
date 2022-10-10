import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  book:any;
  id:any;
    constructor(private dataService: DataService, private activatedRoute:ActivatedRoute) {
  this.id=activatedRoute.snapshot.paramMap.get('id')
      dataService.getProductById(this.id).subscribe((data:any)=>{this.book= data})
     }
  
    ngOnInit(): void {
    }

    AddToCart(id:any){
      
      var item =
      { "Qty": 1,
        "BookId": Number(id),
        "UserId": localStorage.getItem('userId')}

      this.dataService.addToCart(item).subscribe((res)=>{console.log(res)})
    }

    AddToWishlist(id:any){
      
      var item =
      {
        "BookId": Number(id),
        "UserId": localStorage.getItem('userId')}

      this.dataService.addToWishlist(item).subscribe((res)=>{console.log(res)})
    }
}
