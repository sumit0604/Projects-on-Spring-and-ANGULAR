import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizesService } from 'src/app/services/quizes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  qid:any
  quiz:any
  constructor(private _acativate:ActivatedRoute,private _quizservice:QuizesService,private _route:Router) { }

  ngOnInit(): void {
    this.qid =this._acativate.snapshot.params['qid'];
    // alert(this.qid)
    this._quizservice.getquiz(this.qid).subscribe((data:any)=>{
      // console.log(data);
      this.quiz = data;
    },
    (error)=>{
      Swal.fire("Failed!!","Can not fetch Questions!","error");
    })

  }

  confirmTest(){
    Swal.fire({
      title: 'Do you want to start the test?',
      showCancelButton: true,
      confirmButtonText: 'Start',
      denyButtonText: `Don't start`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this._route.navigate(['/start/'+this.quiz.qId]);
      } else if (result.isDenied) {
        Swal.fire('Test not started!', '', 'info')
      }
    })
  }

}
