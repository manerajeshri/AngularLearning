import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-card',
  templateUrl: './child-card.component.html',
  styleUrls: ['./child-card.component.css']
})
export class ChildCardComponent implements OnInit {

  // to receive data from parent
 @Input() title ='';
 @Input() content ='';

  constructor() { }

  ngOnInit() {
    console.log(this.title);
    console.log(this.content);
    
    
  }

}
