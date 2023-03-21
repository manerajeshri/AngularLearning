import { Component, OnInit } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message;
// DI
  constructor(private authService : AuthService, private route :Router) { }

  ngOnInit() {
  }
// writing method on login 
login(username,password){
var result = this.authService.checkuser(username,password);
if(result == true){
  this.route.navigate(['/product']);
}else{
  this.message ="Invalid username or password"
}

}

}
