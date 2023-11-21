import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post.interface';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id)
      .subscribe(post => this.post = post);
  }

}
