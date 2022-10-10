import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin-coupons-page',
  templateUrl: './admin-coupons-page.component.html',
  styleUrls: ['./admin-coupons-page.component.css']
})
export class AdminCouponsPageComponent implements OnInit {
  coupons: any[] = [];



  couponForm = this.fb.group({
    couponCode: [null, [Validators.required]],
    description: [null, [Validators.required]],
    discount: [null, [Validators.required,Validators.max(1), Validators.min(0)]],
    active: [false,],
    
  })


  constructor(private dataService:DataService,private fb: FormBuilder) {
    dataService.getAllCoupons().subscribe((data: any) => {
      this.coupons = data;
    
    })

   }

  ngOnInit(): void {
  }

  activation(id:any,active:any){

    this.dataService.activateCoupons(id,!active).subscribe((data: any) => {
      this.coupons = data;
    
    })

    location.reload();

  }

  get couponCode() {
    return this.couponForm.get('couponCode')
  }
  get description() {
    return this.couponForm.get('description')
  }
  get discount() {
    return this.couponForm.get('discount')
  }
  get active() {
    return this.couponForm.get('active')
  }


  submitForm() {
    console.log(this.couponForm.value)
    
    this.dataService.addCoupon(this.couponForm.value).subscribe((response) => {
      console.log(response)
      
    location.reload();
    },
      (error) => {
        console.log(error)
  
      }
    );
  }

}
