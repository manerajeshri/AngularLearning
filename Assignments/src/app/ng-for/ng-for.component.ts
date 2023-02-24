import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {



  // array to display
arrayOfNumbers=[1,2,3,4,5];
display:boolean=false;
myFriends=["abhi","sam","ram"];
emp=[{
  id : 77,
  course : "Angular"
}]
arrayOfEmp :any []=[
  {
    name: "emp5", city:"satara"
  },
  {
    name: "emp6", city:"pune"
  },
  {
    name: "emp7", city:"mumbai"
  }
    ]


  constructor() { }

  ngOnInit() {
  }

}
