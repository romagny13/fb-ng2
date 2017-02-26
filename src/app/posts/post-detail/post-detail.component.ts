import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html'
})
export class PostDetailComponent implements OnInit {
  _key: any;
  post: any;
  errorMessage: string;
  constructor(private _route: ActivatedRoute, private _router: Router, private _postService: PostService) { }

  ngOnInit() {
    this._key = this._route.snapshot.params['key'];
    this._postService.getPost(this._key).subscribe((post) => {
      this.post = post;
    });
  }

  deletePost() {
    this._postService.deletePost(this._key).then(() => {
        this._router.navigate(['/posts']);
      });
  }
}


