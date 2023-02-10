import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  // my array
peoples : any[] =[
  {
    name : 'jack',
    country : 'UK'
  },
  {
    name : 'jackline',
    country : 'UK'
  },
  {
    name : 'mac',
    country : 'india'
  },
  {
    name : 'sam',
    country : 'pak'
  },
  {
    name : 'jackram',
    country : 'india'
  }
]

  constructor() { }

  ngOnInit() {
  }

}
