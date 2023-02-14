import { Component, OnInit } from '@angular/core';
import { DirectiveClass } from '../modules/directiveClass';

@Component({
  selector: 'app-directive-project',
  templateUrl: './directive-project.component.html',
  styleUrls: ['./directive-project.component.css']
})
export class DirectiveProjectComponent implements OnInit {

  //  directive array 
  // directives: any =["Component Directives", "Structural Directives", "Attribute Directives","Custom Directives" ]
// taking Object for country and state from class Country


  // directive array of object
  // taking Object for country and state from class Country
  directive: DirectiveClass = {
    directives: ["Component", "Structural","Attribute","Custom"],
    Component: ["Component Directive"],
    Structural: ["ngFor","ngIf","ngSwitch"],
    Attribute : ["ngStyle","ngClass"],
    Custom : ["Custom Directive"]
  }


selectedDirective : string=""
onChange(value){
  console.log("value", value);
  this.selectedDirective = value;
}

selectedDirective1 : string=""
onChange1(value){
  console.log("value", value);
  this.selectedDirective1 = value;
}

  constructor() { }

  ngOnInit() {
  }
 
}
