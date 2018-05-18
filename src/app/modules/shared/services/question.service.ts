import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Question } from '../models/question.model';

export class QuestionService {
  constructor() {}

  getQuestions(query?: any): Observable<Question[]> {
    return Observable.of([
      {
        title: 'How do I run an AOT build in Angular 6?',
        content: '',
        tags: [
          { name: 'Angular 6' },
          { name: 'AOT' }
        ],
        author: {
          name: 'John Smith'
        },
        createdAt: new Date()
      },
      {
        title: 'ng eject - Do I need to?',
        content: '',
        tags: [
          { name: 'Angular CLI' },
          { name: 'Webpack' },
          { name: 'Angular' }
        ],
        author: {
          name: 'Dennis Bergkamp'
        },
        createdAt: new Date()
      },
      {
        title: 'How do I deploy my app with pm2?',
        content: '',
        tags: [
          { name: 'PM2' },
          { name: 'Servers' },
          { name: 'Node.js' },
          { name: 'Angular' },
          { name: 'Devops' }
        ],
        author: {
          name: 'Robert Pires'
        },
        createdAt: new Date()
      }
    ]);
  }
}
