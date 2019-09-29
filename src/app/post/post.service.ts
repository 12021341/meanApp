import { Post } from './post.model';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// @Injectable this will find in the root level and create one instance of the app
@Injectable({ providedIn: 'root' })

export class PostsService {
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    constructor(private http: HttpClient) { }

    getPosts() {
        this.http.get<{ message: string, posts: Post[] }>('http://localhost:3000/api/posts')
            .subscribe((postData) => {
                this.posts = postData.posts;
                this.postsUpdated.next([...this.posts]);
            });
    }

    getPostUpdateListener() {
        return this.postsUpdated.asObservable(); // returns object that can listen 
    }

    addPosts(id: string, title: string, content: string) {
        const post: Post = { id: id, title: title, content: content };

        this.http.post<{ message: string }>('http://localhost:3000/api/posts', post)
            .subscribe((responseData) => {
                console.log(responseData.message);
            });

        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);  // Emits a the copied value after updating
    }

}
