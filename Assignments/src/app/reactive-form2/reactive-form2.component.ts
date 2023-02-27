import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form2',
  templateUrl: './reactive-form2.component.html',
  styleUrls: ['./reactive-form2.component.css']
})
export class ReactiveForm2Component implements OnInit {

  reactiveForm : FormGroup;
  createForm(){
    this.reactiveForm = new FormGroup({
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'subscription' : new FormControl("Advanced"),
      'password' : new FormControl(null,Validators.required),
      'date' :new FormControl(null),
    })
  }
  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }

}
 