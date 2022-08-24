import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent implements OnInit {
  category:any

  constructor(private _category:CategoryService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this._category.categories().subscribe((data:any)=>{
      this.category = data;
    },
    (error)=>{
      this.snack.open("Failed to load quizes"," ",{
        duration:3000
      })
    })
  }

}
