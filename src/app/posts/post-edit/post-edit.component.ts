import { Category } from '../category';
import { Post } from '../post';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styles: []
})
export class PostEditComponent implements OnInit {
  pageTitle = 'Edit post';
  _key: any;
  post: Post;
  categories: Category[];
  form: FormGroup;
  constructor(private _route: ActivatedRoute, private _router: Router, private _postService: PostService) { }

  ngOnInit(): void {
    this._key = this._route.snapshot.params['key'];

    this._postService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });

    this._postService.getPost(this._key).subscribe((post) => {
      this.post = post;
      this.form = new FormGroup({
        'title': new FormControl(this.post.title, [Validators.required, Validators.minLength(3)]),
        'content': new FormControl(this.post.content, [Validators.required]),
        'category': new FormControl(this.post.category, [Validators.required])
      });
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this._postService.updatePost(this._key, this.form.value).then(() => {
        this._router.navigate(['/posts']);
      });
    }
  }
}
