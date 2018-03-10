import { Component, Input } from '@angular/core';
import { Tip } from '../../models';

@Component({
  selector: 'tip-list',
  templateUrl: './tip-list.component.html',
  styleUrls: ['./tip-list.component.css']
})
export class TipListComponent {
  @Input() tips: Tip[];

  constructor() { }
}
