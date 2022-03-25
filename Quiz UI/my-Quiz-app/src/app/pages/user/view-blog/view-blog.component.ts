import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {
i=0;

values:any
// like_no:any

  constructor() { }

  ngOnInit(): void {
    
  }
  clicked(){
    // this.like =true;
    // this.i=this.i+1;
    this.setlike()
    this.getlikess()
    console.log(this.getlikess())
  }
  setlike(){
    // this.i=this.i+1;
    this.values = this.i+1
    localStorage.setItem('likesss', this.values)
    this.values=this.values+1
  }
  getlikess() {
    return localStorage.getItem('likesss')
 }

}
