import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
//
arrayOfNumbers=[1,2,3,'four', 'five'];
  constructor() { }

  ngOnInit() {
  }

}
