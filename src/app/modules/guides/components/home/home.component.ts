import { Component, OnInit } from '@angular/core';
import { GuideService } from '../../../shared/services/guide.service';
import { Observable } from 'rxjs/Observable';
import { Guide } from '../../../shared/models';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public guides$: Observable<Guide[]>;
  
  constructor(private guideService: GuideService) { }

  ngOnInit() {
    this.getGuides();
  }

  getGuides(query?: any): void {
    this.guides$ = this.guideService.getGuides();
  }

}
