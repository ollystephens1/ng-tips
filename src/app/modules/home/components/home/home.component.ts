import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TipsService } from '../../../shared/services/tips.service';
import { Tip, Guide } from '../../../shared/models';
import { GuideService } from '../../../shared/services/guide.service';
import { QuestionService } from '../../../shared/services/question.service';
import { BlogService } from '../../../shared/services/blog.service';
import { Question } from '../../../shared/models/question.model';
import { BlogPost } from '../../../shared/models/blog-post.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public tips$: Observable<Tip[]>;
  public guides$: Observable<Guide[]>;
  public questions$: Observable<Question[]>;
  public posts$: Observable<BlogPost[]>;

  constructor(
    private tipsService: TipsService,
    private guideService: GuideService,
    private questionService: QuestionService,
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.tips$ = this.tipsService.getTips();
    this.guides$ = this.guideService.getGuides();
    this.questions$ = this.questionService.getQuestions();
    this.posts$ = this.blogService.getPosts();
  }
}
