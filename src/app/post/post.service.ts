import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Post } from './post.interface';
import { POSTS } from '../mock-data';

@Injectable({ providedIn: 'root' })
export class PostService {

    constructor() { }

    getPosts(): Observable<Post[]> {
        const posts = of(POSTS);
        return posts;
    }

    getPost(id: number): Observable<Post> {
        const post = POSTS.find(h => h.id === id)!;
        return of(post);
    }
}

