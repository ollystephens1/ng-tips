import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TipsService } from '../../../shared/services/tips.service';
import { Tip } from '../../../shared/models';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tips$: Observable<Tip[]>;

  constructor(private tipsService: TipsService) { }

  ngOnInit() {
    this.tips$ = this.tipsService.getTips();
  }

}
