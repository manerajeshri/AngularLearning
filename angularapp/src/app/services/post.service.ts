import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  url='https://jsonplaceholder.typicode.com/posts';
  url1='https://jsonplaceholder.typicode.com/users';
//DI
  constructor(private http : HttpClient ) { }

getPost():Observable<any>{
return this.http.get(this.url);
}

getPostById (id : number){
  return this.http.get(this.url + '/'+ id)
}

getPost1():Observable<any>{
  return this.http.get(this.url1);
  }

  getPostById1 (id : number){
    return this.http.get(this.url1 + '/'+ id)
  }

}
