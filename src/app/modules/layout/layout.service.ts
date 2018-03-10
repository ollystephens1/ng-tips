import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class LayoutService {

  public getLinks(): Observable<any> {
    return Observable.of([
      { label: 'Tips', url: 'tips' },
      { label: 'Guides', url: 'guides' },
      { label: 'Questions', url: 'questions' },
      { label: 'Blog', url: 'blog' }
    ]);
  }
}
