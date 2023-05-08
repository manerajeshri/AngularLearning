import { Component, OnInit } from '@angular/core';
import { Movies } from '../models/movies';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
//
arrayOfNumbers=[1,2,3,'four', 'five'];

// array of object using models
movies : Movies[] = [
  {title : 'kantara' ,  year : 2021},
  {title : 'DDLJ' ,  year : 2022},
  {title : 'Ved' ,  year : 2023},
  {title : '&' ,  year : 2024},

]



  constructor() { }

  ngOnInit() {
  }

}
