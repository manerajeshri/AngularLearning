import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

// 1] jsonplaceholder url
usersurl='https://jsonplaceholder.typicode.com/users';
// 2] DI
  constructor(private http : HttpClient ) { }
// 3] writing Method to get users
getUsers(){
  return this.http.get(this.usersurl)
}


// to get user based on id
getUsersById(id){
  return this.http.get(this.usersurl + '/' + id)
}
}
