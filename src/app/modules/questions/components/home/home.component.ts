import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { QuestionService } from '../../../shared/services/question.service';
import { Question } from '../../../shared/models/question.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public questions$: Observable<Question[]>;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questions$ = this.questionService.getQuestions();
  }

}
