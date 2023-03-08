import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  imgurl = 'https://miro.medium.com/max/1200/0*QOZm9X5er1Y0r5-t'; 
  // imgurl="https://media.istockphoto.com/id/1153372686/photo/404-error-page-not-found.jpg?s=1024x1024&w=is&k=20&c=dpAMCorTiaSRF0T6V6t5sY4gV3UThRdL-ElwJVSflT0=";
  constructor() { }

  ngOnInit() {
  }

}
