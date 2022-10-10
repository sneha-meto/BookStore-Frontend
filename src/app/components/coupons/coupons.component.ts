import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

 coupons: any[] = [];
 isInactive=false;
 @Output() fetchDiscount = new EventEmitter<string>();

  constructor(dataService: DataService, private router : Router) {

    dataService.getCoupons().subscribe((data: any) => {
      this.coupons = data;
    
    })


  }

  ngOnInit(): void {
  }

  clickHandler(discount:any){
    this.isInactive=!this.isInactive;
    this.fetchDiscount.emit(discount);

  }

}
