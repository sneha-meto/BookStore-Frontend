import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  books: any[] = [];
  catId:any;
 
  public baseUrl='/assets/bookstore/';
  constructor(dataService: DataService, private activatedRoute:ActivatedRoute, private router: Router) {

   
       this.catId=this.activatedRoute.snapshot.paramMap.get('catId');

    dataService.getBooksByCatId(this.catId).subscribe((data: any) => {
   
      this.books = data;
    })
    
   


 
  }

  ngOnInit(): void {
  }
  
  goToDetail(pdtId:any){
    this.router.navigateByUrl(`products/details/${pdtId}`)
  }

}
