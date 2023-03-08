import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  userName;
  //DI
  constructor(private _utilityService : UtilityService) { 

    this._utilityService.userName.subscribe(res => {

      console.log(`Data coming from subject component1`, res);
      this.userName = res;
    },err => {
      console.log(`error Occured`,err);
      
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
