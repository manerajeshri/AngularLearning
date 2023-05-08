import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../models/employeeObject';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
// write input decorator
@Input() child :string; // uses property binding [child]
// to send data to parent
// @Output() fromChild : EventEmitter<string> = new EventEmitter<string>(); // event binding (fromChild)
// sending object using model
employee : Employee;
@Output() fromchild : EventEmitter<Employee> = new EventEmitter<Employee> ();
// data to be sent
lastName = 'bhai'
  constructor() { }


  
  ngOnInit() {
    console.log(this.child);
    
  }
  onClick(){
    // this.fromChild.emit(this.lastName)
    this.employee = new Employee()
    this.employee.name ='Maya';
    this.employee.id = 77;
    this.employee.salary = 1500000;
    this.employee.city = 'Pune';
    this.fromchild.emit(this.employee)
  }
}
