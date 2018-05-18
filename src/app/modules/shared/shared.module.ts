import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipListComponent } from './components/tip-list/tip-list.component';
import { TipCardComponent } from './components/tip-card/tip-card.component';
import { TipsService } from './services/tips.service';

import { GuideListComponent } from './components/guide-list/guide-list.component';
import { GuideCardComponent } from './components/guide-card/guide-card.component';
import { GuideService } from './services/guide.service';

import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogService } from './services/blog.service';

import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { QuestionService } from './services/question.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TipListComponent,
    TipCardComponent,
    GuideListComponent,
    GuideCardComponent,
    BlogListComponent,
    BlogPostComponent,
    QuestionListComponent,
    QuestionCardComponent
  ],
  exports: [
    TipListComponent,
    GuideListComponent,
    BlogListComponent,
    QuestionListComponent
  ],
  providers: [
    TipsService,
    GuideService,
    BlogService,
    QuestionService
  ]
})
export class SharedModule { }
