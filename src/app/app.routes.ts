import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full', loadChildren: './modules/home/home.module#HomeModule'
  },
  { 
    path: 'tips', 
    pathMatch: 'full', 
    loadChildren: './modules/tips/tips.module#TipsModule' 
  },
  { 
    path: 'guides', 
    pathMatch: 'full', 
    loadChildren: './modules/guides/guides.module#GuidesModule' 
  },
  { 
    path: 'questions', 
    pathMatch: 'full', 
    loadChildren: './modules/questions/questions.module#QuestionsModule' 
  },
  { 
    path: 'blog', 
    pathMatch: 'full', 
    loadChildren: './modules/blog/blog.module#BlogModule' 
  },
  { 
    path: 'admin', 
    pathMatch: 'full', 
    loadChildren: './modules/admin/admin.module#AdminModule' 
  }
];
