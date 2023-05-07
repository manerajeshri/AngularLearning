import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
// write input decorator
@Input() child :string; // uses property binding [child]
// to send data to parent
@Output() fromChild : EventEmitter<string> = new EventEmitter<string>(); // event binding (fromChild)

// data to be sent
lastName = 'bhai'
  constructor() { }


  
  ngOnInit() {
    console.log(this.child);
    
  }
  onClick(){
    this.fromChild.emit(this.lastName)
  }
}
