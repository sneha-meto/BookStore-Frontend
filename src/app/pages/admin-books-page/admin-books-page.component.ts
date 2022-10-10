import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin-books-page',
  templateUrl: './admin-books-page.component.html',
  styleUrls: ['./admin-books-page.component.css']
})
export class AdminBooksPageComponent implements OnInit {


  books: any[] = [];
  type="Select Type";
  isInactive=true;



  bookForm = this.fb.group({
    categoryId: [null, [Validators.required]],
    description: [null, [Validators.required]],
    image: [null, [Validators.required]],
    status: [false, ],
    position: [null, [Validators.required]],
    isbn:[null,[Validators.required,Validators.pattern('^[0-9]{13}$')]],
    title:[null, [Validators.required]],
    year:[null, [Validators.required]],
    price:[null, [Validators.required]],
    author:[null, [Validators.required]],
  })


  constructor(private dataService:DataService,private fb: FormBuilder) {
  

   }

  ngOnInit(): void {
  }

  delete(id:any){

    this.dataService.deleteBook(id).subscribe((res: any) => {
     console.log(res)
    })

    location.reload();

  }

  save(id:any,cid:any,title:any,isbn:any,year:any,price:any,desc:any,img:any,pos:any,status:any,author:any){
    var book=
      {
        BookId:id,
        CategoryId: cid,
        Description: desc,
        Image: img,
        Status: status,
        Position: pos,
        Title:title,
        ISBN:isbn,
        Year:year,
        Price:price,
        Author:author
      }
      console.log(book)
      this.dataService.updateBook(book).subscribe((res: any) => {
        console.log(res)
   
       })
       location.reload();

    

  }


  get categoryId() {
    return this.bookForm.get('categoryName')
  }
  get description() {
    return this.bookForm.get('description')
  }
  get image() {
    return this.bookForm.get('image')
  }
  get status() {
    return this.bookForm.get('status')
  }
  get position() {
    return this.bookForm.get('position')
  }
  get author() {
    return this.bookForm.get('author')
  }
  get title() {
    return this.bookForm.get('title')
  }
  get isbn() {
    return this.bookForm.get('isbn')
  }
  get price() {
    return this.bookForm.get('price')
  }
  get year() {
    return this.bookForm.get('year')
  }



  submitForm() {
    console.log(this.bookForm.value)
    
    this.dataService.addBook(this.bookForm.value).subscribe((response) => {
      console.log(response)
      
    location.reload();
    },
      (error) => {
        console.log(error)
  
      }
    );
  }

  setType(type:string){
    this.type=type;
    this.isInactive=false;
  }

  initiateSearch(key:any){
   this.dataService.searchAllBooks(this.type,key).subscribe((data: any) => {
   
    this.books = data;
     console.log(data)

     this.books.forEach(cat=> {
      cat['notEditable']=true;
      
     });
    })


  }


}
