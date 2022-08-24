import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizesService } from 'src/app/services/quizes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-update',
  templateUrl: './quiz-update.component.html',
  styleUrls: ['./quiz-update.component.css']
})
export class QuizUpdateComponent implements OnInit {

  qId=0;
  quiz:any;
  categories:any;
  constructor(private _activated:ActivatedRoute,private _singlequiz:QuizesService,private category:CategoryService,private _route:Router) { }

  ngOnInit(): void {
    // this.activated.snapshot.params.qId;
    this.qId =this._activated.snapshot.params['qid'];
    // alert(this.qId);
    this._singlequiz.getquiz(this.qId).subscribe((data:any)=>{
      this.quiz = data;
    });

    this.category.categories().subscribe((data:any)=>{
      this.categories = data;
    },
    (error)=>{
      Swal.fire("Failed!!","Something went Wrong..","error");
    })
  }


  updated()
  {
    this._singlequiz.updatedata(this.quiz).subscribe((data:any)=>{
      Swal.fire("Successfully!!","Data has been Updated","success").then((x)=>{
        this._route.navigate(['/admin/view-quiz']);
      })
      this.quiz={
        title: "",
        description:"",
        maxMarks:"",
        NumberOfQuestions:"",
        category:""
      }
    },
    (error)=>{
      Swal.fire("Failed!!","Something went Wrong..","error");
    })
  }

}
