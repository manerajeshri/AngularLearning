import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {


  // declare variable having link as string
  apiurl='https://jsonplaceholder.typicode.com/users'
  constructor(private httpClient : HttpClient) { }

// for resolve
products =[
  {id:1},
  {id:2}
]


getUsers () {
 return this.httpClient.get(this.apiurl)
}

}
