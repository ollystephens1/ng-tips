import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipListComponent } from './components/tip-list/tip-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TipListComponent
  ],
  exports: [
    TipListComponent
  ]
})
export class SharedModule { }
