import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {
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
