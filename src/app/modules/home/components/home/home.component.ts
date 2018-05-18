import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TipsService } from '../../../shared/services/tips.service';
import { Tip, Guide } from '../../../shared/models';
import { GuideService } from '../../../shared/services/guide.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tips$: Observable<Tip[]>;
  guides$: Observable<Guide[]>;

  constructor(
    private tipsService: TipsService,
    private guideService: GuideService
  ) { }

  ngOnInit() {
    this.tips$ = this.tipsService.getTips();
    this.guides$ = this.guideService.getGuides();
  }
}
