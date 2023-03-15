import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // url

  apiurl : "http://localhost:3000/todos";
  // DI
  constructor(private httpClient : HttpClient) { }

  // create method
  create(data : any) {
    return this.httpClient.post(this.apiurl, data);
  }
}


// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class TodoService {

//   // url

//   apiurl : "http://localhost:3000/todos";
//   // DI
//   constructor(private httpClient : HttpClient) { }

//   // create method
//   create(data : any){
//     return this.httpClient.post(this.apiurl, data);
//   }
// }