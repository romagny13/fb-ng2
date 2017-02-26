import { Category } from '../category';
import { Post } from '../post';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
  posts: Post[];
  categories: Category[];
  constructor(private _postService: PostService) { }

  _getPosts(category?: any) {
    this._postService.getPosts(category).subscribe((posts) => {
      this.posts = posts;
    });
  }

  filterByCategory(category: any) {
    category = category === 'none' ? null : category;
    this._getPosts(category);
  }

  ngOnInit() {
    this._postService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
    this._getPosts();
  }

}
