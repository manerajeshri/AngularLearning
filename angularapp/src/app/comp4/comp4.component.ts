import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
  userName;
  constructor(private _utilityService : UtilityService) { 
    this._utilityService.userName.subscribe(res=>{
      console.log(`component4`,res);
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
