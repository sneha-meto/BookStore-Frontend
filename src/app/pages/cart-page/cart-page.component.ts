import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  public cartItems: any[]=[];
  public baseUrl='/assets/bookstore/';
  id:any;
  subtotal=0;
  discount=0;
  total=0;
  address:any;
  coupon:any;
  cId=null;
  cDis=0;



  constructor(private dataService: DataService, private router: Router,private activatedRoute:ActivatedRoute) {
    this.id=activatedRoute.snapshot.paramMap.get('id')
dataService.getCartById(this.id).subscribe((data:any)=>{
  this.cartItems=data;
  console.log(data)


  this.cartItems.forEach(item => {
    this.subtotal+=item.Price*item.Qty
    
  });

})
   }

   updateQty(item:any,value:any){
  
    var newItem={
       "Qty":Number(value),
       "CartItemId":Number(item.CartItemId)
     }

     console.log(newItem)
     this.dataService.updateQty(newItem).subscribe((res)=>{console.log(res)});
     console.log("update api")
     location.reload();
 
 
   }

   applyDiscount(coupon:any){
    this.coupon=coupon;
    this.discount = coupon.Discount*this.subtotal;
    this.cId=this.coupon.CouponId;
    this.cDis=this.coupon.Discount;

   }

   applyAddress(value:any){
    this.address = value;

   }

   checkout(){
    
   
   var order=
    {
      "items":this.cartItems,
      "addressId":this.address.AddressId,
      "userId":localStorage.getItem('userId'),
      "couponId":this.cId,
      "discount":this.cDis

    }
    console.log(order)

    this.dataService.placeOrder(order).subscribe((res)=>{console.log(res)});

    this.router.navigateByUrl('thankyou')
   }

   remove(id:any){
    this.dataService.removeFromCart(id).subscribe((res)=>{console.log(res)});
    location.reload();
   }




  ngOnInit(): void {

  
  }



}
