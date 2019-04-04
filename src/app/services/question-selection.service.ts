import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Question } from '../entities/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionSelectionService {

  private question = new Subject<Question>();
  selectedQuestion$ = this.question.asObservable();

  constructor() { }

  selectQuestion(selectedQuestion): void {
      this.question.next(selectedQuestion);
  }
}
