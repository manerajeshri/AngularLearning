import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  // 1]create instace 
  myReactiveForm : FormGroup; // declaring form group collection of form control is formGroup
  constructor(private _fb: FormBuilder) { 
    //3] calling method by default
    this.createForm(); // called by default as constructor called by default
  }
  // creating array
  notAllowedNames=['Jack','Harry'];

//   NaNames(control : FormControl){
// if (this.notAllowedNames.indexOf(control.value)!==-1) {
//   return {'namesNotAllowed':true}
// } else {
//   return null
// }
//   }
  // sir
  NaNames(control: FormControl) {
    if(this.notAllowedNames.indexOf(control.value) !== -1) {
      return {'namesNotAllowed': true}
    } else {
      return null;
    }
  }

  NaEmails(control: FormControl):Promise <any>  | Observable <any>
  {
const myResponse = new Promise<any> ((resolve,reject)=>{
  setTimeout(()=>{
if (control.value == 'codemindtechnology@gmail.com') {
  resolve({'emailNotAllowed': true})
}else{
  resolve(null)
}
  },5000)
})
return myResponse;
  }



  ngOnInit() {
// setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'userDetails' : {
    //       'username': 'Codemind123',
    //       'email': 'codemind@gamil.com'
    //     },
    //     'course': 'HTML',
    //     'skills': ['angular']
    //   })
    // })

// setTimeout(() => {
//   this.myReactiveForm.patchValue({
//     'userDetails' : {
//              'username': 'Codemind123',
//             'email': 'codemind@gamil.com'
//            }
//   })
// }, 5000)



  }
// 2] write method and call in constructor
createForm(){
//   this.myReactiveForm= new FormGroup({
//     'userDetails' : new FormGroup ({
//       'username' : new FormControl (null,[Validators.required,this.NaNames.bind(this)]),
//     'email': new FormControl(null,[Validators.required,Validators.email,this.NaEmails]),
//     }),
    
//     'course' :new FormControl("Angular"), // can pass default value as Angular 
//     'skills': new FormArray([
//       new FormControl(null,Validators.required)
//     ])

// })

this.myReactiveForm = this._fb.group({
  userDeatils: this._fb.group({
    username: ['', [Validators.required, this.NaNames.bind(this) ]],
    email: ['', [Validators.required, Validators.email], this.NaEmails]
  }),
  course: ['Angular'],
  skills: this._fb.array([])
 })


}
isSubmitted : boolean =false;
onSubmit(){
  this.isSubmitted=true;
  // alert("Method called");

  console.log(`My ReactiveForm`,this.myReactiveForm);
  console.log(`My ReactiveForm`,this.myReactiveForm.value);
  
}

// for add skills button

// onAddSkills(){
//   (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null));
// }

OnAddSkills() {
  (<FormArray> this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required));
}

}
