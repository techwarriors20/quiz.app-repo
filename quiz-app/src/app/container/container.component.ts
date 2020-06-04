import { Component, OnInit } from '@angular/core';
import { QuizapiService } from '../services/quizapi.service';
import{Quizmodel} from '../model/Quizmodel';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  
  quizmodel = new Array<Quizmodel>();

  constructor( private quizservice: QuizapiService,private http:HttpClient) {
    this.quizservice.getallquiz().subscribe(response => 
      {
        this.quizmodel = response;
      });
  }

  ngOnInit() {
   
  }

  createquiz()
  {
  
     const quizmodel : Quizmodel = 
      {
        id : "5ed4efac0fd6f72dd04534ab",
        quizCategory : "TestCategory",
        quizName: "Test",
        questionAnswer: [
          {
            question: "Hi",
            answerType: "How",
            answers: [
              {
                answer: "How",
                isCorrect: 0,
                answerDetail: "How are you"
              }
            ]
          }
        ],
        calculation: {
          type: "active",
          result: [
            {
              min: 0,
              max: 0,
              resultText: "how"
            }
          ],
          additionalDisplay: "welcome"
        }
      };
    
      // this.http.post( "https://localhost:44314/api/v1/quiz/CreateQuiz", quizmodel).subscribe( data =>
      // {
      //   console.log(data);
      // })


      

      const myArrStr=JSON.parse(JSON.stringify(quizmodel))
//console.log(JSON.parse(myArrStr));
     
    this.quizservice.createquiz(myArrStr).subscribe(data => {
          console.log(data);
    })
  }
}
  
