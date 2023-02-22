import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  
  count : number =0;
  firstName : string ="Rocky";
  firstName2 : string ="Enter your name";

// for button
onButtonClick(){
  console.log(`Button was clicked`);
  // this.count += 1;
  this.count = this.count +1;
  console.log(this.count);    
}

// for text
onKeyUp(value){
// console.log('$event',value) // will give whole object. but we want value only so use .target.value
// console.log('$event', value.target.value);// will give total value only
console.log('$event.target.value', value) // will give total value only as received from html
}









  constructor() { 
    
  }

  ngOnInit() {
  }

}
