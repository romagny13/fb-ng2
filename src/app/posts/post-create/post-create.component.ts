import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styles: []
})
export class PostCreateComponent implements OnInit {
  pageTitle = 'Add new post';
  categories: Category[];
  form: FormGroup;
  constructor(private _postService: PostService, private _router: Router) { }

  ngOnInit(): void {
    this._postService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });

    this.form = new FormGroup({
      'title': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'content': new FormControl('', [Validators.required]),
      'category': new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this._postService.addPost(this.form.value).then(() => {
        this._router.navigate(['/posts']);
      });
    }
  }

}
