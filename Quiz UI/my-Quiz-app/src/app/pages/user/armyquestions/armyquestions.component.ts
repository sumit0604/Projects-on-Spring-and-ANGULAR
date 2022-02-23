import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { info, time } from 'console';
import ArmyQuestion from 'src/app/Datasets_of_questions/ArmyDataset';
// import Swal from 'sweetal/ert2';
import * as $ from "jquery";

@Component({
  selector: 'app-armyquestions',
  templateUrl: './armyquestions.component.html',
  styleUrls: ['./armyquestions.component.css']
})
export class ArmyquestionsComponent implements OnInit {

  amryques:any;
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.amryques =  ArmyQuestion;

  }

  testing(){
    var name = $("testing").val();
    alert(name);
  }
  // swal({
  //   title: "Good job!",
  //   text: "You clicked the button!",
  //   icon: "success",
  //   button: "Aww yiss!"
  // });
 

}
