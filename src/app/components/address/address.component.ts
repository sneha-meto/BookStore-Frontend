import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addresses: any[] = [];
  isInactive=false;
  isHidden=true;

  name:any;
  animal:any;
  @Output() fetchAddress = new EventEmitter<string>();
 

  addressForm = this.fb.group({
    building: [null, [Validators.required]],
    street: [null, [Validators.required]],
    locality: [null, [Validators.required]],
    district: [null, [Validators.required]],
    pin: [null, [Validators.required, Validators.pattern('^[0-9]{6}$')]],
    userId:localStorage.getItem('userId')
  })
 
   constructor(private dataService: DataService, private router :Router, private fb: FormBuilder,) {
 
     dataService.getAdresses(localStorage.getItem('userId')).subscribe((data: any) => {
       this.addresses = data;
     
     })
 
 
   }
 
   ngOnInit(): void {
   }

   get building() {
    return this.addressForm.get('building')
  }
  get street() {
    return this.addressForm.get('street')
  }
  get locality() {
    return this.addressForm.get('locality')
  }
  get district() {
    return this.addressForm.get('district')
  }
  get pin() {
    return this.addressForm.get('pin')
  }
 
   selectHandler(adr:any){
     this.isInactive=!this.isInactive;
     this.fetchAddress.emit(adr);
 
   }
   deleteHandler(id:any){
    this.dataService.deleteAddress(id).subscribe((response) => {
      console.log(response);
      location.reload();

  })}

   submitForm() {
    console.log(this.addressForm.value)
    
    this.dataService.addAddress(this.addressForm.value).subscribe((response) => {
      console.log(response)

    this.isHidden=true;
    location.reload();
    },
      (error) => {
        console.log(error)
  
      }
    );
  }

  NewAddress(){
    this.isHidden=false;
  }



}
