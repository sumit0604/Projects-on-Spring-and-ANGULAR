import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent implements OnInit {

  constructor(private _category:CategoryService) { }

  category = {
    title :" ",
    description:""
  }

  ngOnInit(): void {
  }
  submitform()
  {
    this._category.addcategories(this.category).subscribe(data=>{
      Swal.fire("Successfully","Data has been Submitted","success");
      this.category.title= " ",
      this.category.description =" "
    })
  }

}
