import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuestionSelectionService } from '../../services/question-selection.service';
import { Question } from '../../entities/question';

@Component({
  selector: 'app-question-info',
  templateUrl: './question-info.component.html',
  styleUrls: ['./question-info.component.css']
})
export class QuestionInfoComponent implements OnInit {

  subscription: Subscription;
  selectedQuestion: Question;

  constructor(private questionSelectionService: QuestionSelectionService) {
    this.subscription = questionSelectionService.selectedQuestion$.subscribe(
      selectedQuestion => {
        this.selectedQuestion = selectedQuestion;
    });
  }

  ngOnInit() {
  }

}
