import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikisearchapiService {

  // 1] give url
  url='https://en.wikipedia.org/w/api.php';

  // 2] DI
  constructor(private httpclient : HttpClient) { }

  // 3] write method to get data from server

  // Below are ate query parameters for the above api end point
  // 
  getData1(){
    return this.httpclient.get(this.url, {params: {
      action: 'query',
      format: 'json',
      list: 'search',
      utf8: '1',
      // Note : srsearch parameter is taking search value from search text box for example space.
      srsearch: 'space',
      origin: '*'
      }})
  }
}
// 4] now DI to component WikisearchapiComponent