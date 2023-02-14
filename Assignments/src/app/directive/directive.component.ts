import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
show : boolean= true;
countOfClick : number=0;
count: number;
countArray=[];
date:any = new Date();
displayDate :any;
displayTime : any;
  constructor() { }
  onButtonClick(){
    this.show = !this.show
    this.countOfClick = this.countOfClick +1;
    // console.log(`Count of clicks : `, this.countOfClick);
    this.countArray.push(this.countOfClick)
    console.log(`Array of clicks :`,this.countArray);
    this.count=  this.countArray.length;

    // date and time
     this.displayDate = this.date.toDateString();
    console.log(`Date :`,this.date.toDateString());
    this.displayTime = this.date.toLocaleTimeString();
  console.log(`Time :`,this.date.toLocaleTimeString());
  }

  

  ngOnInit() {
    
  }

}
