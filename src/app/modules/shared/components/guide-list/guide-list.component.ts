import { Component, Input, OnInit } from '@angular/core';
import { Guide } from '../../models';

@Component({
  selector: 'guide-list',
  templateUrl: './guide-list.component.html',
  styleUrls: ['./guide-list.component.css']
})
export class GuideListComponent implements OnInit {
  @Input() guides: Guide[];

  constructor() { }

  ngOnInit() {
  }

}
