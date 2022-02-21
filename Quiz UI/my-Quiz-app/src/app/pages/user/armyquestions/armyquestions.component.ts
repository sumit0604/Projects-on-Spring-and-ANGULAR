import { Component, OnInit } from '@angular/core';
import ArmyQuestion from 'src/app/Datasets_of_questions/ArmyDataset';

@Component({
  selector: 'app-armyquestions',
  templateUrl: './armyquestions.component.html',
  styleUrls: ['./armyquestions.component.css']
})
export class ArmyquestionsComponent implements OnInit {

  amryques:any;
  constructor() { }

  ngOnInit(): void {
    this.amryques =  ArmyQuestion;
    
  }

}
