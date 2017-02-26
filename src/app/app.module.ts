import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { firebaseConfig } from './firebase.config';
import { AngularFireModule } from 'angularfire2';
import { PostService } from './posts/post.service';
import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { routing } from './app.routing';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostCreateComponent,
    PostDetailComponent,
    PostEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
