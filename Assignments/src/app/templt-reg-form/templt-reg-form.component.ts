import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templt-reg-form',
  templateUrl: './templt-reg-form.component.html',
  styleUrls: ['./templt-reg-form.component.css']
})
export class TempltRegFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  cities=['Mumbai','Kolkata','Delhi'];
  defaultcity='Mumbai';
  genders=[{
    id:1,value:'Male'

  },{
    id:2,
    value:'Female'
  }];
  isMatch:boolean;
  isSuccess:boolean;
  onblur(obj1,obj2){
    let str1=obj1.value;
    let str2=obj2.value;
    if(str1.length>=8 && str2.length>=8){
      if(obj1.value==obj2.value)
      {
        this.isMatch=false;
        this.isSuccess=true;
      }
      else{
        this.isMatch=true;
        this.isSuccess=false;
      }
    }
   
    console.log(obj1.value,obj2.value);
    
  }
  defaultgender='Male';
  isAge:boolean=false;
  onAge(val){
    
    let num=val.value;
    if(num<17 || num>20){
      this.isAge=true;
    }
    else{
      this.isAge=false;
    }
  }

}
