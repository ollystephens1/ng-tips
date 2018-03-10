import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './modules/layout/layout.module';
import { SharedModule } from './modules/shared/shared.module';
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    SharedModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
