import { Component, OnInit, OnDestroy } from '@angular/core';
import {AccordionModule} from "ngx-accordion";
import {Post } from '../post.model';
import { from } from 'rxjs';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy {


 
  //posts=[
  //  {title: "first Post", Content:"first one"},
  //  {title: "Second Post", Content:"Second one"},
  //  {title: "third Post", Content:"Third one"},
  //];

  posts: Post[] = [];
  private postSub: Subscription;
  
 
  constructor(public postService: PostService) { 
    
  }

  ngOnInit() {
  this.posts=this.postService.getPosts();
  this.postSub = this.postService.getPostUpdateListener()
     .subscribe((posts: Post[])=> {
      this.posts=posts;
     });
  }

  ngOnDestroy() {
   this.postSub.unsubscribe();
  }


}
