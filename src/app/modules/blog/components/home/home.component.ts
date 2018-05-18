import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../shared/services/blog.service';
import { Observable } from 'rxjs/Observable';
import { BlogPost } from '../../../shared/models/blog-post.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public posts$: Observable<BlogPost[]>;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.posts$ = this.blogService.getPosts();
  }
}
