import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin-categories-page',
  templateUrl: './admin-categories-page.component.html',
  styleUrls: ['./admin-categories-page.component.css']
})
export class AdminCategoriesPageComponent implements OnInit {

  categories: any[] = [];
  // "CategoryId": 1,
  // "CategoryName": "Fiction                       ",
  // "Description": "short description of the genre.",
  // "Image": "fiction.jpg",
  // "Status": true,
  // "Position": 1,
  // "CreatedAt": "2020-05-05T10:10:10"


  categoryForm = this.fb.group({
    categoryName: [null, [Validators.required]],
    description: [null, [Validators.required]],
    image: [null, [Validators.required]],
    status: [false, [Validators.required]],
    position: [null, [Validators.required]],
  })


  constructor(private dataService:DataService,private fb: FormBuilder) {
    dataService.getAllCategories().subscribe((data: any) => {
      this.categories = data;

      this.categories.forEach(cat=> {
        cat['notEditable']=true;
        
       });
    
    })

   }

  ngOnInit(): void {
  }

  delete(id:any){

    this.dataService.deleteCategory(id).subscribe((res: any) => {
     console.log(res)
    })

    location.reload();

  }

  save(id:any,name:any,desc:any,img:any,pos:any,status:any){
    var cat=
      {
        CategoryId: id,
        CategoryName: name,
        Description: desc,
        Image: img,
        Status: status,
        Position: pos,
      }
      this.dataService.updateCategory(cat).subscribe((res: any) => {
        console.log(res)
       })
       location.reload();

    

  }

  get categoryName() {
    return this.categoryForm.get('categoryName')
  }
  get description() {
    return this.categoryForm.get('description')
  }
  get image() {
    return this.categoryForm.get('image')
  }
  get status() {
    return this.categoryForm.get('status')
  }

  get position() {
    return this.categoryForm.get('position')
  }


  submitForm() {
    console.log(this.categoryForm.value)
    
    this.dataService.addCategory(this.categoryForm.value).subscribe((response) => {
      console.log(response)
      
    location.reload();
    },
      (error) => {
        console.log(error)
  
      }
    );
  }

}
