import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
//  posts  = [
//      {title: 'First Post', content: 'This is a first post content!'},
//      {title: 'Second Post', content: 'This is a second post content!'},
//      {title: 'Third Post', content: 'This is a third post content!'}
//  ];
@Input() posts  = [];

}
