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

  show:boolean=false
  amryques:any;
  constructor() { }

  ngOnInit(): void {
    this.amryques =  ArmyQuestion;
    this.randomArrayShuffle(this.amryques)

  }

  testing(){
    this.show=!this.show
  }
  randomArrayShuffle(array:any) {
    var currentIndex = array.length, temporaryValue:any, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

}
