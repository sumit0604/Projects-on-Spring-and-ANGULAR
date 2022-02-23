import { Component, OnInit } from '@angular/core';
import upscquestion from 'src/app/Datasets_of_questions/Upscquestion';

@Component({
  selector: 'app-upscquestions',
  templateUrl: './upscquestions.component.html',
  styleUrls: ['./upscquestions.component.css']
})
export class UpscquestionsComponent implements OnInit {

  show:boolean=false
  upscques:any
  constructor() { }

  ngOnInit(): void {

    this.upscques = upscquestion
    this.randomArrayShuffle(this.upscques)
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
