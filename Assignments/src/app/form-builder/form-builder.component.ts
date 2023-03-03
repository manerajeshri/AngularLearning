import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

// creating course array
course = ['Angular' , 'HTML', 'CSS']

  // 1] create Instance of FormGroup 
  myForm : FormGroup;


  constructor(private _fb : FormBuilder) {  //3] Inject (private _fb : FormBuilder) in constructor and import from ang forms
    this.createForm(); // 2] called method in constructor
  }

  //2] Write Method createForm() to create form and call in constructor
createForm(){
// 4] crete your form here

this.myForm = this._fb.group({
  userDetails : this._fb.group({
    username:['',Validators.required],
    email:['',[Validators.required,Validators.email]]
  }),
  course:['Angular']
})

}
  ngOnInit() {
  }
}
