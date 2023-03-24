import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { resolve } from 'url';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  users : any;
  // constructor(private demoservice : DemoService) { }

  constructor(private activateRoute : ActivatedRoute){}

  // fetching products from demo service by DI
  ngOnInit() {
this.users = this.activateRoute.snapshot.data['data'];
console.log(`resolve data before route`,this.users);

   
    // this.users = this.demoservice.products;
    // console.log(`resove example`, this.users);
    
  }

}
