import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  mode: ProgressSpinnerMode = 'determinate';
  
  constructor(private locationst:LocationStrategy,private _questnservice:QuestionsService,private activated:ActivatedRoute) { }

  qid:any
  quest:any;

  marksgot=0;
  correctanswer=0;
  attempted=0;
  isubmit = false;
  timer:any;


  ngOnInit(): void {

    this.qid =this.activated.snapshot.params['qid'];
    this.canNotGoBack()
    this.loadQuestions()
    this.getFormatedTime();
    
  }
  loadQuestions()
  {
    this._questnservice.questions(this.qid).subscribe((data:any)=>{
      this.quest = data;
      this.timer= this.quest.length * 2 * 60;
      this.quest.forEach((q:any)=>{
        q['giveans']= ''
      })
      console.log(this.quest);
      this.settimer();
    },(error)=>{
      Swal.fire("Failed!","Something Went Wrong!!","error");
    })

  }
  // evaluatequiz()
  // {
  //   this._questnservice.evalquiz(this.quest).subscribe(data=>{
  //     console.log(data);
      
  //   })
  // }


  canNotGoBack()
  {
    history.pushState(null, '',location.href)
    this.locationst.onPopState(()=>{
      history.pushState(null , '' , location.href)
    })
  }


  submitquiz()
  {
    Swal.fire({
      title: 'Do you want to Submit the test?',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      denyButtonText: `Don't submit`,
    }).then(result=>{
      if(result.isConfirmed){
        //Marks calculations..
        this.evaluateQuiz()
        
      }
      
      //  console.log("Correctanswers   ---------s" +this.correctanswer);
      //   console.log("Marks got   ---------s" + this.marksgot);
      //   console.log("Marks got   ---------s" + this.attempted);
    })
    
  }
  settimer()
  {
    let t:any = window.setInterval(()=>{
      if(this.timer<=0){
        this.evaluateQuiz();
        clearInterval(t);
      }
      else{
        this.timer--;
      }
    },1000)
  }

  getFormatedTime()
  {
    let mm = Math.floor(this.timer/60);
    let ss = this.timer -mm*60;
    return `${mm} min : ${ss} seconds`;
  }
  evaluateQuiz()
  {
      this.isubmit = true;
        this.quest.forEach((q:any)=>{
          if(q.giveans == q.answer){
            this.correctanswer=this.correctanswer + 1;
            let eachmarks =this.quest[0].quiz.maxMarks / this.quest.length;
            this.marksgot +=eachmarks;
          }
        })
        if(this.quest.givans != ''){
          this.attempted=this.attempted+ 1;
        }
  }

}
