import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  // userName = new Subject<any>(); // observable // cant set initial or default value
  userName = new BehaviorSubject<any>(` Username and Qualification`) // can set initial or default value
  constructor() { }
}
