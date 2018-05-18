import { Component, OnInit } from '@angular/core';
import { TipsService } from '../../../shared/services/tips.service';
import { Observable } from 'rxjs/Observable';
import { Tip } from '../../../shared/models';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public tips$: Observable<Tip[]>;

  constructor(private tipsService: TipsService) { }

  ngOnInit() {
    this.getTips();
  }

  getTips(query?: any) {
    this.tips$ = this.tipsService.getTips(query);
  }

}
