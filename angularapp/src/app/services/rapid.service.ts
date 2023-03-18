import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidService {
  // url= 'https://yh-finance.p.rapidapi.com/auto-complete';
url= "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US";
  constructor(private httpClient : HttpClient) { }

  getFinance(){
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': 'e0b8da4d5cmsh27229674ccc328bp191b8cjsnc9b2bd3589f2',
    'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
    })
return this.httpClient.get(this.url,{headers: headers})
  }
}
