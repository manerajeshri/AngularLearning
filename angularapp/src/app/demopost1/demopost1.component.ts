import { Component, OnInit } from '@angular/core';
import { Post1 } from '../models/post1';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demopost1',
  templateUrl: './demopost1.component.html',
  styleUrls: ['./demopost1.component.css']
})
export class Demopost1Component implements OnInit {
  arrPost: Post1[]=[];
  constructor(private postService : PostService) { }

  ngOnInit() {

    this.postService.getPost1().subscribe(res=>  {
      this.arrPost = res;
       console.log(`received data`, res);
       
    })

  }

}
