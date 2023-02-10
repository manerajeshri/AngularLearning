import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

// my code starts here
// 1 setting condition true for ngif
condition: boolean = false;
 // writing variable
 selectedProduct : string ;
  
 // writing method
 getProductValue(value){
// console.log(`Selected value from drop down :`, value.target.value);
console.log(`Selected value from drop down :`, value);
this.selectedProduct = value;

 }
}
