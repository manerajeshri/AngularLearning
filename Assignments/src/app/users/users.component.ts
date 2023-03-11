import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // 5] declare var array object to fetch data

  users;

  // 4] DI
  constructor(private usersService : UsersService ) { }

  ngOnInit() {

    this.usersService.getUsers().subscribe(res=>{
      console.log(`res`,res);
      this.users=res;
    })

  }

}
