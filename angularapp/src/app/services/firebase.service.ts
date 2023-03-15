import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  url= 'https://angular-fd534-default-rtdb.firebaseio.com/'
  //DI
  constructor(private httpClient :HttpClient) { }

  createPost(){
    let postData= {
      title: 'This is firebase example ',
      content :' We are calling angular post method'
    }
    // for POST :  url + body 
    return this.httpClient.post(this.url + 'posts.json',postData)
  }
getPostDataFirebase(){
  // for get : url 
  return this.httpClient.get(this.url + 'posts.json');
}



}
