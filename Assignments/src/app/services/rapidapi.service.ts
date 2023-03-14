import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

  // enter url from rapid site with j query
url= "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US";
  // DI
  constructor(private httpclient : HttpClient) { }

  getFinance(){
    let headers = new HttpHeaders({
  //  from rapid api test end point code snippet
    "X-RapidAPI-Key": "e0b8da4d5cmsh27229674ccc328bp191b8cjsnc9b2bd3589f2",
		"X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
    })
    //now pass url and headers
    return this.httpclient.get(this.url, { headers : headers });
  }
}
