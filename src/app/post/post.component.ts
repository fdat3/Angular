import { Component } from '@angular/core';
import { POSTS } from '../mock-data';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
  posts = POSTS;
}
