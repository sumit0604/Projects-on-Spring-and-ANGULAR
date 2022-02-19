import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { QuizesService } from 'src/app/services/quizes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  quizdata =[];

  addquiz={
    title:"",
    description:"",
    maxMarks:"",
    numberOfQuestions:"",
    active:false,
    category:{
      cid:''
    }
  }


  constructor(private _category:CategoryService,private _addquiz:QuizesService) { }

  ngOnInit(): void {
    this._category.categories().subscribe((data:any)=>{
      this.quizdata = data;
    })
  }

  addquizz()
  {

    if(this.addquiz.title.trim()==" " || this.addquiz.category.cid ==null || this.addquiz.maxMarks == null,
    this.addquiz.description==null, this.addquiz.numberOfQuestions==null)
    {
      Swal.fire("Failed!!","All fields are require!!","error");
      return;
    }

    // alert("sowking");
    // console.log(this.quizdata);
    this._addquiz.addquizes(this.addquiz).subscribe((data:any)=>{
      this.addquiz = data;
      Swal.fire("Successfully","Data has been Submitted!!","success");
      this.addquiz={
        title:"",
        description:"",
        maxMarks:"",
        numberOfQuestions:"",
        active:false,
        category:{
          cid:''
        }
      }
    },
    (error)=>{
      Swal.fire("Failed","Something Went Wrong","error");
    })
    
  }

}
