import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TipsComponent } from './components/tips/tips.component';
import { GuidesComponent } from './components/guides/guides.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent, 
    DashboardComponent, 
    TipsComponent, 
    GuidesComponent, 
    QuestionsComponent, 
    BlogComponent
  ]
})
export class AdminModule { }
