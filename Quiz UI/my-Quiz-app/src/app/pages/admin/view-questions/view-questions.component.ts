import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  qId:any;
  title:any;
  questions=[];

  constructor(private _activated:ActivatedRoute,private questionservice:QuestionsService,private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this.qId = this._activated.snapshot.params['qid'];
    this.title=  this._activated.snapshot.params['title'];
    // console.log(this.qId);
    // console.log(this.title);

    this.questionservice.questions(this.qId).subscribe((data:any)=>{
      this.questions= data;
      Swal.fire("succesfully loaded the Exam paper!!","","success");
    })
  
  }
  deletequestn(quesId:any)
  {
    // alert(quesId);
    Swal.fire({
      icon:'info',
      showCancelButton:true,
      confirmButtonText:"Delete",
      title:"Are you sure??"
    }).then((result)=>{
      if(result.isConfirmed){
        this.questionservice.delete(quesId).subscribe(data=>{
          this._snack.open("Question has been deleted!!","",{
            duration:3000
          })
          window.location.reload();
        },
        (error)=>{
          Swal.fire("Failed!!","Can not Delete question","error");
        })
      }
    })
  }

}
