import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../../models/blog-post.model';

@Component({
  selector: 'blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  @Input() posts: BlogPost[];

  constructor() { }

  ngOnInit() {
  }

}
