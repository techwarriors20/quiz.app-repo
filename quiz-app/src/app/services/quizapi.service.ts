import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Quizmodel } from '../model/Quizmodel';


import { from, throwError } from 'rxjs';
import { distinct,retry, catchError,distinctUntilChanged } from 'rxjs/operators';


export interface ServerResponse {
  success: boolean;
  msg: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuizapiService {

  //#region  header and token
  //baseUri = 'https://cors-anywhere.herokuapp.com/https://reflectapp.azure-api.net/api';
  baseUri='https://reflectapi.azurewebsites.net/api/v1/quiz';
  

  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluIiwicm9sZSI6IkFkbWluIiwibmJmIjoxNTkyNTQ5MTk1LCJleHAiOjE1OTMxNTM5OTUsImlhdCI6MTU5MjU0OTE5NX0.hxiVr5ylXRKy7k9JG99-Jr2JFqNMI69qzkteRD3cVZM";       
  headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.token).set('Content-Type','application/json');
  httpOptions = { 'headers': this.headers_object};
 //#endregion
  
  constructor(private http :HttpClient) { }

  
  getallquiz(){
    return this.http.get<Quizmodel[]>(this.baseUri+ '/GetAllQuizs',this.httpOptions);
  }
  
  getquizid(quizid)
  {
    return this.http.get<Quizmodel[]>(this.baseUri + "/GetQuizById?id="+ quizid,this.httpOptions);

  }

  createquiz(quizmodel: Quizmodel)  {
    return this.http.post<ServerResponse>(this.baseUri + '/CreateQuiz',quizmodel,this.httpOptions);
  }

 


  //#region Error handling
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  //#endregion

}
   
    
  