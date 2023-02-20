import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  // 1]create instace 
  myReactiveForm : FormGroup; // declaring form group collection of form control is formGroup
  constructor() { 
    //3] calling method by default
    this.createForm(); // called by default as constructor called by default
  }

  ngOnInit() {
  }
// 2] write method and call in constructor
createForm(){
  this.myReactiveForm= new FormGroup({
    'userDetails' : new FormGroup ({
      'username' : new FormControl (null),
    'email': new FormControl(null,[Validators.required,Validators.email]),
    }),
    
    'course' :new FormControl("Angular") // can pass default value as Angular 

})
}
isSubmitted : boolean =false;
onSubmit(){
  this.isSubmitted=true;
  alert("Method called");

  console.log(`My ReactiveForm`,this.myReactiveForm);
  console.log(`My ReactiveForm`,this.myReactiveForm.value);
  
}

}
