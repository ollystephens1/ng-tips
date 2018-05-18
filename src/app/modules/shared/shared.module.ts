import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipsService } from './services/tips.service';
import { GuideService } from './services/guide.service';
import { BlogService } from './services/blog.service';
import { QuestionService } from './services/question.service';

import { HomeCardComponent } from './components/home-card/home-card.component';
import { HomeListComponent } from './components/home-list/home-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeCardComponent,
    HomeListComponent
  ],
  exports: [
    HomeCardComponent,
    HomeListComponent
  ],
  providers: [
    TipsService,
    GuideService,
    BlogService,
    QuestionService
  ]
})
export class SharedModule { }
