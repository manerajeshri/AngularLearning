import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  // defining variables
  userName=[]
  constructor(private _utilityService : UtilityService) { 
    this._utilityService.userName.subscribe(res=>{
      console.log(`data from User res`,res);
      this.userName=res;
      
    })
  }

  ngOnInit() {
  }

  submit(details){
    this.userName= details.value;
    console.log(details.value);

    this._utilityService.userName.next(details.value)
  }
}
