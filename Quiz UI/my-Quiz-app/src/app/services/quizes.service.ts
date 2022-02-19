import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizesService {

  constructor(private _quizhttp:HttpClient) { }

  quizfetch()
  {
    return this._quizhttp.get(`${baseUrl}/quiz/`);
  }

  addquizes(quiz:any)
  {
    return this._quizhttp.post(`${baseUrl}/quiz/`,quiz);
  }

  deletequiz(qid:any)
  {
    return this._quizhttp.delete(`${baseUrl}/quiz/${qid}`);
  }

  // updatequiz(qid:any)
  // {
  //   this._quizhttp.put(`${baseUrl}/quiz/`);
  // }

  //fetch Single quizz

  getquiz(qId:any)
  {
  return   this._quizhttp.get(`${baseUrl}/quiz/${qId}`);
  }

  //update full data
  updatedata(quizdata:any)
  {
    return this._quizhttp.put(`${baseUrl}/quiz/`,quizdata);
  }

  // addquestion(question:any)
  // {
  //   return this._quizhttp.post(`${baseUrl}/question/`,question);
  // }

  //Get all the quizes by category....
  getQuizByCategory(cid:any)
  {
    return this._quizhttp.get(`${baseUrl}/quiz/category/${cid}`);
  }

  //get active quizes....
  getactivequizes()
  {
    return this._quizhttp.get(`${baseUrl}/quiz/active`);
  }

  //get activated quizes by category id
  getActiveQuizByCategory(cid:any){
    return this._quizhttp.get(`${baseUrl}/quiz/category/active/${cid}`);
  }

}
