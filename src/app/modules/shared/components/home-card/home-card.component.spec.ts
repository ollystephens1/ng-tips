import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models';

@Component({
  selector: 'home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class TipCardComponent implements OnInit {
  @Input() item: Item;
  constructor() { }

  ngOnInit() {
  }

}
