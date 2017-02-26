import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import 'rxjs/add/operator/map';

import { Category } from './category';
import { Post } from './post';

@Injectable()
export class PostService {
    _posts: FirebaseListObservable<Post[]>;
    _categories: FirebaseListObservable<Category[]>;
    constructor(private _angularFire: AngularFire) { }

    getPosts(category?: any): FirebaseListObservable<Post[]> {
        if (category !== null) {
            this._posts = this._angularFire.database.list('posts', {
                query: {
                    orderByChild: 'category',
                    equalTo: category
                }
            });
            return this._posts;
        } else {
            this._posts = this._angularFire.database.list('posts');
            return this._posts;
        }
    }

    getPost(key: any) {
        return this._angularFire.database.object(`/posts/${key}`);
    }

    addPost(post: Post): firebase.Promise<any> {
        return this._posts.push(post);
    }

    updatePost(key: any, post: Post): firebase.Promise<any> {
        return this._posts.update(key, post);
    }

    deletePost(key: any): firebase.Promise<any> {
        return this._posts.remove(key);
    }

    getCategories() {
        this._categories = this._angularFire.database.list('categories');
        return this._categories;
    }
}
