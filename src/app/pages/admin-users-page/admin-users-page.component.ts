import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin-users-page',
  templateUrl: './admin-users-page.component.html',
  styleUrls: ['./admin-users-page.component.css']
})
export class AdminUsersPageComponent implements OnInit {

  users: any[] = [];
  type="Select Type";
  isInactive=true;


  constructor(private authService:AuthService) {
   
   }

  ngOnInit(): void {
  }

  setType(type:string){
    this.type=type;
    this.isInactive=false;
  }

  initiateSearch(key:any){
    this.authService.searchUsers(this.type,key).subscribe((data: any) => {
    
     this.users = data;
      console.log(data)
     })
 
 
   }
  activation(id:any,active:any){

    this.authService.activateUser(id,!active).subscribe((data: any) => {
      this.users = data;
    
    })

    location.reload();

  }






}
