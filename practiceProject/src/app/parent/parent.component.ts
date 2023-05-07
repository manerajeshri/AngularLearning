import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
// to receive data from child
receivedDataFromChildd ;

  // set data to be sent to child
parentToChild : string ='I am from parent';

// data sending to app-child-card
dataarray =[
  {
    title : 'mango',
    content : 'I like mango'
  },
  {
    title : 'Apple',
    content : 'I like Apple color is red'
  }
]

  constructor() { }

  ngOnInit() {
  }
  receivedDataFromChild(val){
    this.receivedDataFromChildd= val
console.log(`receivedDataFromChild`, val);

  }
}
