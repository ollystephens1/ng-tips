import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent }
    ])
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
