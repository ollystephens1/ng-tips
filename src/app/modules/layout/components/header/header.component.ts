import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../layout.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  links$: Observable<any[]>;

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    this.links$ = this.layoutService.getLinks();
  }

}
