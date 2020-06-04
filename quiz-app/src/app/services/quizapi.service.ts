import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Quizmodel } from '../model/Quizmodel';
import { Observable } from 'rxjs';

export interface ServerResponse {
  success: boolean;
  msg: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuizapiService {

  private headers = new HttpHeaders()
  .set("Access-Control-Allow-Origin", "*")
  .set("Access-Control-Allow-Methods", "*")
  .set("Access-Control-Allow-Headers", "*")
  .set("Access-Control-Max-Age", "44314")
  .set('Content-Type', 'application/json')


  baseUri = 'https://localhost:44314/api/v1/quiz';

  constructor(private http :HttpClient) { }
  
  getallquiz(): Observable<Quizmodel[]>{
   
    return this.http.get<Quizmodel[]>(this.baseUri+ '/GetAllQuizs');
  }

  createquiz(quizmodel: Quizmodel): Observable<ServerResponse> {
    return this.http.post<ServerResponse>(this.baseUri + '/CreateQuiz', quizmodel);
  }
}
   
    
  