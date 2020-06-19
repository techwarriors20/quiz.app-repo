 export interface Quizmodel
{
     
    quizCategory: string;
    quizName: string;
    questionAnswer: [
      {
        question: string;
        answerType: string;
        answers: [
          {
            answer: string;
            isCorrect: 0;
            answerDetail: string
          }
        ]
      }
    ];
    calculation: {
      type: string;
      result: [
        {
          min: 0;
          max: 0;
          resultText: string
        }
      ];
      additionalDisplay: string
    }
  }