import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  showAge;
  constructor() { }

  ageCalculator(dob : any): number{
    if (dob) {
      const convertAge= new Date(dob);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      return this.showAge=Math.floor(timeDiff / (1000 * 3600 *24) / 365);
      
    }
      }
    
      print(){
        alert('I am From Services');
      }

      display(){
        alert('I am from display services')
      }
}

