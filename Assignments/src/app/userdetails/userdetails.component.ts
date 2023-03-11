import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styles: []
})
export class UserdetailsComponent implements OnInit {

  userById;
  // DI 
  constructor(private activatedRoute : ActivatedRoute, private usersService : UsersService ) { }

  ngOnInit() {
    let activeID = this.activatedRoute.snapshot.params['id'];
    console.log(`activeID`, activeID);
    
    this.usersService.getUsersById(activeID).subscribe(res=>{
      console.log(res);
      this.userById=res;
    })
  }
  
  // variable to display details by Id



}
