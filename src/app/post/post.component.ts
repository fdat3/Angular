import { Component, OnInit } from '@angular/core';
import { POSTS } from '../mock-data';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PostService } from './post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from './post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  posts: Post[] = POSTS;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  customOptions: OwlOptions = {
    loop: true,
    items: 3,
    margin: 10,
    merge: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
  }
}
