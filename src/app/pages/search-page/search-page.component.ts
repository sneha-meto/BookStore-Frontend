import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

 
  books: any[] = [];
  type="Select Type";
  isInactive=true;
 
  public baseUrl='/assets/bookstore/';
  constructor(private dataService: DataService,  private router: Router) {

  
  }

  ngOnInit(): void {
  }
  goToDetail(pdtId:any){
    this.router.navigateByUrl(`products/details/${pdtId}`)
  }
  setType(type:string){
    this.type=type;
    this.isInactive=false;
  }

  initiateSearch(key:any){
   this.dataService.searchBooks(this.type,key).subscribe((data: any) => {
   
    this.books = data;
     console.log(data)
    })


  }

}
