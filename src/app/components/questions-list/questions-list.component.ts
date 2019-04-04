import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StackOverflowService } from '../../services/stack-overflow.service';
import { QuestionSelectionService } from '../../services/question-selection.service';
import { QuestionList } from '../../entities/questions-list';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  subscription: Subscription;
  questionsList: QuestionList;

  constructor(private stackOverflowService: StackOverflowService, private questionSelectionService: QuestionSelectionService) {
    this.subscription = stackOverflowService.currentQuestionList$.subscribe(
      questionsList => {
        this.questionsList = questionsList;
    });
  }

  ngOnInit() {
  }

  selectItem(selectedItem) {
    this.questionSelectionService.selectQuestion(selectedItem);
  }
}


