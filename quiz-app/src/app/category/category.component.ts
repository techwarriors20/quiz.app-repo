import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizapiService } from '../services/quizapi.service';
import { Quizmodel } from '../model/Quizmodel';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public show :boolean=false;
  id:any;
  private sub:any;
  quizcategory: Quizmodel[];
    
  constructor(private route:ActivatedRoute,private quizservice:QuizapiService) { }

  ngOnInit() {

    this.sub=this.route.params.subscribe(p=>
      {
        this.id=p['id'];
        
      })

      this.quizservice.getallquiz().subscribe((data: Quizmodel[])=>{
        // this.quizmodel=data;
         this.quizcategory=(data.filter(t => t.quizCategory === this.id));
         console.log(this.quizcategory);   
       })  
     }

     
  scategroyclick()
  {
    this.show=true;
  }

  createquiz()
  {
  
     const quizmodel : Quizmodel = 
      {
         
        quizCategory : "Machine",
        quizName: "windows",
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

