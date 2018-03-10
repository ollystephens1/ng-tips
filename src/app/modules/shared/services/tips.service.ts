import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Tip } from '../models';

@Injectable()
export class TipsService {

  public getTips(): Observable<Tip[]> {
    return Observable.of([
      {
        title: 'Loading customizable Tailwind css with Angular CLI',
        subtitle: `Tailwind is configured almost entirely in plain JavaScript. To do this you'll 
                  need to generate a Tailwind config file for your project.`,
        content: '',
        tags: [
          { name: 'Tailwind' },
          { name: 'Angular CLI' },
          { name: 'CSS' }
        ],
        author: {
          name: 'Olly Stephens'
        }
      },
      {
        title: 'Module structure for large, lazy-loaded apps',
        subtitle: `Code splitting allows us to essentially break our codebase down into smaller 
                    chunks and serve those chunks on demand, which we call “lazy loading”`,
        content: '',
        tags: [
          { name: 'Routing' },
          { name: 'Modules' },
          { name: 'Lazy loading' }
        ],
        author: {
          name: 'Nico Wernli'
        }
      },
      {
        title: 'Animating router-outlet changes on navigation',
        subtitle: `How to animate your App Router transitions using the new animation features in Angular`,
        content: '',
        tags: [
          { name: 'Animations' },
          { name: 'Routing' },
          { name: 'CSS' }
        ],
        author: {
          name: 'Ryan Jones'
        }
      }
    ]);
  }
}
