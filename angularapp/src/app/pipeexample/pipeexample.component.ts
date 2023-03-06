import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeexample',
  templateUrl: './pipeexample.component.html',
  styleUrls: ['./pipeexample.component.css']
})
export class PipeexampleComponent implements OnInit {
  // taking new date
todaysDate = new Date();
price:number = 70000;
employee = {
  empid : '1',
  empname : 'Jack'
}
// variable for custom pipe
countLength : number = 500;

  constructor() { }

  ngOnInit() {
    console.log(this.todaysDate);
    
  }

}
