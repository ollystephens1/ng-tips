import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutService } from './layout.service';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    LayoutService
  ]
})
export class LayoutModule { }
