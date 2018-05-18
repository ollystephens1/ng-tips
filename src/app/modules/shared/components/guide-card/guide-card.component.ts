import { Component, Input, OnInit } from '@angular/core';
import { Guide } from '../../models';

@Component({
  selector: 'guide-card',
  templateUrl: './guide-card.component.html',
  styleUrls: ['./guide-card.component.css']
})
export class GuideCardComponent implements OnInit {
  @Input() guide: Guide;

  constructor() { }

  ngOnInit() {
  }

}
