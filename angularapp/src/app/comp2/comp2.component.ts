import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  userName;
  constructor(private _utilityService : UtilityService) {
    this._utilityService.userName.subscribe(res=>{
      console.log(`component2`,res);
      this.userName = res;
    })
   }

  ngOnInit() {
  }
  updateUserName(uName){
    this.userName= uName.value;
    console.log(uName.value);
    this._utilityService.userName.next(uName.value)
  }
}
