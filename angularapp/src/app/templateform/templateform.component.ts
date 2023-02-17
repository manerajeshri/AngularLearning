import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

// for entered data display or not 
isSubmitted : boolean =false;

// for entered data display 
formData  = {
  email: '',
  password: '',
  course: '',
  gender: ''
}
// setting default value to display when refresh or on start
defaultValue="Angular";
defaultGender = 'Male';

// courses array
courses: string[] = ['Angular', 'Javascript', 'Typescript'];

// gender array
genders = [ 
  {
    id: '1', value: 'Male'
  },
  {
    id: '2', value: 'Female'
  }
]

emails='';
// isdisabled :boolean= false; not required

constructor() { }
  ngOnInit() {
  }

  
  login(form : NgForm){
    this.isSubmitted= true;

    // console.log(form);
    // console.log(`form contents : form.values : `,form.value);
    // console.log(`is Form valid? : `,form.valid); // to get form is valid or not use .valid

    this.formData.email = form.value.userDetail.email;
    this.formData.password = form.value.userDetail.password;
    this.formData.course = form.value.course;
    this.formData.gender = form.value.gender;
    
    form.reset(); // to reset form

    form.controls['course'].setValue('Angular'); // to set default values multiple values
    form.controls['gender'].patchValue('Male'); // to set default values only one value
    
    // POST api/ Saveuser(formData);
  }



}

