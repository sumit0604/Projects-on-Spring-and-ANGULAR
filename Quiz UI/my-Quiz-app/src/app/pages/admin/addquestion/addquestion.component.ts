import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';
// import  * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  // public Editor= ClassicEditor ;
  qId:any;
  title:any;
  questions={
    quiz:{qId:""},
    content:"",
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    answer:""
  }
  constructor(private _activate:ActivatedRoute,private questionservice:QuestionsService) { }

  ngOnInit(): void {
   this.qId = this._activate.snapshot.params['qId'];
   this.title= this._activate.snapshot.params['title'];
   this.questions.quiz['qId'] = this.qId;
  //  console.log(this.qId);
  //  console.log(this.title);
  }

  submitquestion()
  {
    this.questionservice.addquestions(this.questions).subscribe((data:any)=>{
      Swal.fire("Successfully!!","Data has been Submitted!!","success");
    },
    (error)=>{
      Swal.fire("Something Went Wrong","","error");
    })
  }

}
