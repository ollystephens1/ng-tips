import { Component, OnInit, Input } from '@angular/core';
import { Tip } from '../../models';

@Component({
  selector: 'tip-card',
  templateUrl: './tip-card.component.html',
  styleUrls: ['./tip-card.component.css']
})
export class TipCardComponent implements OnInit {
  @Input() tip: Tip;
  constructor() { }

  ngOnInit() {
  }

}
