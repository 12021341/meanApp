import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { Subscription } from 'rxjs';
import { PostsService } from '../post.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy{
    //  posts  = [
    //      {title: 'First Post', content: 'This is a first post content!'},
    //      {title: 'Second Post', content: 'This is a second post content!'},
    //      {title: 'Third Post', content: 'This is a third post content!'}
    //  ];
    posts: Post[] = [];
    private postsSub: Subscription;

    constructor(public postsService: PostsService) {
    }

    ngOnInit() {
        this.postsService.getPosts();
        this.postsSub = this.postsService.getPostUpdateListener()
        .subscribe((posts: Post[]) =>  { // receive post data and assign to an Post array
            this.posts = posts; // update the posts
        }); // Subscribe when new data emitted
    }

    ngOnDestroy() { // called whenever component will be removed
        this.postsSub.unsubscribe();
    }
}
