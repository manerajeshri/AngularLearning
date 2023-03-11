import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demopostdetails1',
  templateUrl: './demopostdetails1.component.html',
  styleUrls: ['./demopostdetails1.component.css']
})
export class Demopostdetails1Component implements OnInit {

  displayDetails ;
  constructor(private route : ActivatedRoute, private postService : PostService) { }

  ngOnInit() {

    let id1= this.route.snapshot.params['id1'];
    this.displayDetails = this.postService.getPostById1(id1).subscribe(res => {
      console.log(`get post by id1`, res);
      this.displayDetails = res;
      
    })
    console.log(`Aciivated ID`,id1);
    
  }
}
