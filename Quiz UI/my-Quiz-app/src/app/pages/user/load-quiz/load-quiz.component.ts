import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizesService } from 'src/app/services/quizes.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  constructor(private _activated:ActivatedRoute,private _allquiz:QuizesService) { }

  catId:any
  quizzes:any
  ngOnInit(): void {
   

    this._activated.params.subscribe((params)=>{
      this.catId = params['catId'];

      if(this.catId ==0){
        console.log("All quizes are here...."); 
        this._allquiz.getactivequizes().subscribe(data=>{
          this.quizzes = data;
          console.log(this.quizzes);
          
        })
      }
      else{
        console.log("selected quizes");
        // this.quizzes=[];
        this._allquiz.getActiveQuizByCategory(this.catId).subscribe((data:any)=>{
          // console.log(data);
          this.quizzes = data;
          
        })
        
      }

    })

    // console.log(this.catId)
    
  }

}
