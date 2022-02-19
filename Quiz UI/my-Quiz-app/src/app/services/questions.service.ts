import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private _httpquestion:HttpClient) { }

  questions(qid:any)
  {
   return this._httpquestion.get(`${baseUrl}/question/quiz/${qid}`);
  }

  addquestions(question:any)
  {
    return this._httpquestion.post(`${baseUrl}/question/`,question);
  }
  delete(quesid:any)
  {
    return this._httpquestion.delete(`${baseUrl}/question/${quesid}`);
}

evalquiz(question:any)
{
  return this._httpquestion.post(`${baseUrl}/question/eval-quiz`,question);
}
}
