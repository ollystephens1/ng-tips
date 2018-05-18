import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BlogPost } from '../models/blog-post.model';

export class BlogService {
  constructor() {}

  getPosts(query?: any): Observable<BlogPost[]> {
    return Observable.of([
      {
        title: 'Angular 6 - Our thoughts',
        subtitle: `Read our complete review of the latest version of Angular.`,
        content: '',
        tags: [
          { name: 'Angular 6' },
          { name: 'Migration' }
        ],
        author: {
          name: 'Ignacio Pastor'
        },
        createdAt: new Date()
      },
      {
        title: 'AngularCamp 2018',
        subtitle: `Check out what we got up to in Austria at this years AngularCamp!`,
        content: '',
        tags: [
          { name: 'AngularCamp 2018' },
          { name: 'Ausria' },
          { name: 'Angular' },
          { name: 'Conferences' },
          { name: 'Meetups' }
        ],
        author: {
          name: 'Ryan Jones'
        },
        createdAt: new Date()
      },
      {
        title: 'Heres why you should use Angular for your next project.',
        subtitle: `Angular? React? Vue.js? Which is best suited to tackle your next development challenge?`,
        content: '',
        tags: [
          { name: 'Javascript' },
          { name: 'Development' },
          { name: 'Frameworks' },
          { name: 'Reviews' },
          { name: 'Meetups' }
        ],
        author: {
          name: 'Javi Rodriguez'
        },
        createdAt: new Date()
      }
    ]);
  }
}
