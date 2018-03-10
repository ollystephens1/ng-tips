import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipListComponent } from './components/tip-list/tip-list.component';
import { TipCardComponent } from './components/tip-card/tip-card.component';

import { TipsService } from './services/tips.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TipListComponent,
    TipCardComponent
  ],
  exports: [
    TipListComponent
  ],
  providers: [
    TipsService
  ]
})
export class SharedModule { }
