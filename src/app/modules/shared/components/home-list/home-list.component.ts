import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
  @Input() items: Item[];
  @Input() options: any = {};
  
  constructor() { }

  ngOnInit() {
  }

}
