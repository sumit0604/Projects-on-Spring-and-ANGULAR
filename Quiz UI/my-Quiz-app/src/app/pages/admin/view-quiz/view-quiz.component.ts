import { Icu } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { QuizesService } from 'src/app/services/quizes.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit {


  quizes=[];
  //Dumy Data fro checking...

  // quizes =[{
  //   qId:1,
  //   title:"Java programing",
  //   description:"this is for java intelligency quiz....",
  //   maxmarks:"100",
  //   noofquestions:"20",
  //   active:"",
  //   category:{
  //     title:"java"
  //   }
  // },{
  //   qId:2,
  //   title:"python programing",
  //   description:"this is for java intelligency quiz....",
  //   maxmarks:"100",
  //   noofquestions:"20",
  //   active:"",
  //   category:{
  //     title:"python"
  //   }
  // }]
  constructor(private quizservice:QuizesService) { }

  ngOnInit(): void {
    this.quizservice.quizfetch().subscribe((data:any)=>{
      this.quizes = data;
      // console.log(data);
    },
    (error)=>{
      Swal.fire("Failed !!","Something Went wrong","error");
    })
  }
  deletequizz(qId:any)
  {
    // alert(qId);
    Swal.fire({
      icon: 'info',
      title:'Are you sure?',
      confirmButtonText:'Delete',
      showCancelButton:true
    }).then(result=>{
      if(result.isConfirmed){
      this.quizservice.deletequiz(qId).subscribe((data:any)=>{
        Swal.fire("Successfully!!","Data has been Deleted.","success");
        window.location.reload();
      },
      (error)=>{
        Swal.fire("failed!!","Something went Wrong","error");
      })
    } 
    })



 
  }

}
