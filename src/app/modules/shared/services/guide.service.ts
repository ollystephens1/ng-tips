import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Guide } from '../models';

@Injectable()
export class GuideService {

  constructor() { }

  public getGuides(): Observable<Guide[]> {
    return Observable.of([
      {
        title: 'Migrating to Angular 6',
        subtitle: `Angular 6 has finally been released, and hopefully with this guide your migration will run smoothly.`,
        content: '',
        tags: [
          { name: 'Angular 6' }
        ],
        author: {
          name: 'Javier Rodriguez'
        },
        createdAt: new Date()
      },
      {
        title: 'Developer Interview preparation',
        subtitle: `What to expect, what to revise and more advice on how to nail down an Angular developer interview.`,
        content: '',
        tags: [
          { name: 'Jobs' },
          { name: 'Angular' },
          { name: 'Careers' },
          { name: 'Industry' }
        ],
        author: {
          name: 'Nico Wernli'
        },
        createdAt: new Date()
      }
    ]);
  }
}
