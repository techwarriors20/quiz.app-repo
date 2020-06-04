import { Component, OnInit } from '@angular/core';
import { QuizapiService } from '../services/quizapi.service';
import {Quizmodel} from '../model/Quizmodel';





@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
   
  quizmodel = new Array<Quizmodel>();

  localquizdata :any=[];

  constructor( private quizservice: QuizapiService) {

    quizservice.getallquiz().subscribe((res) => 
      {
        this.quizmodel = res;
        
      });
   };

  ngOnInit() {
    
  }

}
     
    

  
