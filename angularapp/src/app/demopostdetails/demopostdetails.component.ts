import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demopostdetails',
  templateUrl: './demopostdetails.component.html',
  styleUrls: ['./demopostdetails.component.css']
})
export class DemopostdetailsComponent implements OnInit {

  displayDetails ;
  constructor(private route : ActivatedRoute, private postService : PostService) { }

  ngOnInit() {

    let id= this.route.snapshot.params['id'];
    this.displayDetails = this.postService.getPostById(id).subscribe(res => {
      console.log(`get post by id`, res);
      this.displayDetails = res;
      
    })
    console.log(`Aciivated ID`,id);
    
  }

}
