import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../../models/blog-post.model';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  @Input() post: BlogPost;

  constructor() { }

  ngOnInit() {
  }

}
