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
      // User Details formgroup
      'userDetails': new FormGroup({
        'fullName': new FormControl(null,Validators.required),
        'yourBirthday': new FormControl(null,Validators.required),
        'gender': new FormControl(null,Validators.required),
        'country': new FormControl(null,Validators.required),
        'phone': new FormControl(null,[Validators.required]),
        'bio': new FormControl(null),
      }),
     

      // Account Details formgroup

      'accountDetails': new FormGroup({
        'username': new FormControl(null),
        'email' : new FormControl(null,[Validators.required,Validators.email]),
        'password' : new FormControl(null,Validators.required),
        'confirmPassword' : new FormControl(null,Validators.required),
      })
      
    })
  }

  onSubmit(){
  }
  onClick(){
    // logging all form data
console.log(`All form details`, this.reactiveForm);
console.log(`All form Value`, this.reactiveForm.value);
console.log(`All form Value`, this.reactiveForm.value.fullName);

  }

  constructor() { 
    this.createForm();
  }

  ngOnInit() {
      

  }

}
 