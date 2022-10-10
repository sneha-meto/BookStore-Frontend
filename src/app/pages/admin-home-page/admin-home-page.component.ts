import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

 
  public categories: any[]=[];
  public baseUrl='/assets/bookstore/';

  constructor(dataService: DataService, private router: Router) {
dataService.getAllCategories().subscribe((data:any)=>{
  this.categories=data;
  console.log(data)
})
   }

  ngOnInit(): void {
  }



}
