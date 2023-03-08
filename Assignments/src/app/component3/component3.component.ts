import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
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
