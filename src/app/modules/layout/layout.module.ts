import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutService } from './layout.service';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    LayoutService
  ]
})
export class LayoutModule { }
