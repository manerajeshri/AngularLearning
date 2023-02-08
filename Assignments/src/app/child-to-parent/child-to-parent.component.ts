import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.css']
})
export class ChildToParentComponent implements OnInit {
@Input() display : string;
@Output() sendData : EventEmitter<string | number>=new EventEmitter<string | number> ();

// data to be send write here
 empData = {
  id: 77,
  name : "Rajeshri",
  city : "Pune",
 }
  constructor() { }

  ngOnInit() {
  }
  sendToParent(){
    this.sendData.emit(this.empData.id);
    this.sendData.emit(this.empData.name);
    this.sendData.emit(this.empData.city)
  }
}
