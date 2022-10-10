import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin-orders-page',
  templateUrl: './admin-orders-page.component.html',
  styleUrls: ['./admin-orders-page.component.css']
})
export class AdminOrdersPageComponent implements OnInit {
  isExpanded=false;

  orders:any[]=[];
  orderItems:any[][]=[];

  constructor(private dataService:DataService) {
    dataService.getOrders().subscribe((data)=>{
      console.log(data);
      this.orders=data
   this.orders.forEach(order=> {
    order['isExpanded']=false;
    
   });
   console.log(this.orders);
    
    })

   }

  ngOnInit(): void {
  }

  expand(order:any){

    this.dataService.getOrderItems(order.OrderId).subscribe((data)=>{
      console.log(data);
      this.orderItems[order.OrderId]=data
          })

    order.isExpanded = !order.isExpanded
  }

}
