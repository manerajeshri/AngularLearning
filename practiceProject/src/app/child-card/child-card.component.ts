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

// sending data to parent 
@Output() fromCardChild :EventEmitter<any> = new EventEmitter<any>();
// data to be sent
empObj={
  name: 'Anil',
  city: 'Pune',
  age : 37 
}


  constructor() { }

  ngOnInit() {
    console.log(this.title);
    console.log(this.content);  
  }

  // sending data to parent
  Sendempdata(){
this.fromCardChild.emit(this.empObj)
  }

}
