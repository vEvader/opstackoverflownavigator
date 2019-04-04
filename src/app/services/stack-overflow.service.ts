import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { QuestionList } from '../entities/questions-list';

@Injectable({
  providedIn: 'root'
})
export class StackOverflowService {

  private questionsList = new Subject<QuestionList>();
  currentQuestionList$ = this.questionsList.asObservable();

  pathFn = (tag) => `https://api.stackexchange.com/2.2/tags/$%7B${tag}%7D/faq?site=stackoverflow`;

  constructor(private http: HttpClient) { }

  search(tagSerchQuery): void {
    const requestUrl = this.pathFn(tagSerchQuery);
    this.http.get<boolean>(requestUrl).subscribe((responsee) => {
      const qList = QuestionList.Deserialize(responsee);
      this.questionsList.next(qList);
    });
  }
}
