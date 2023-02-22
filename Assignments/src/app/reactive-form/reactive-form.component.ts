import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // 1]create instace for reactive form
  // declaring form group collection of form control is formGroup
  reactiveForm : FormGroup;
  // subscriptions : ["Basic", "Advanced", "Pro"];
  // todayDate=this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  // mindate = new Date();
  // 2] write method and call in constructor
  createForm(){
    this.reactiveForm = new FormGroup({
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'subscription' : new FormControl("Advanced"),
      'password' : new FormControl(null,Validators.required),
      'date' :new FormControl(null),
    })
  }

  constructor() {
    // 3] method called in constructor IMP
    this.createForm();
   }
  
  // on onSubmit() 
  // will have all form details
  onSubmit(){
// console.log(`All form details`, this.reactiveForm);
// console.log(`All form Value`, this.reactiveForm.value);


  }

  warningMessage="";
  disableErrMsg:boolean=true;
  // for data display enable disbale control
  isSubmitted : boolean = false;
  onClick(){
    this.isSubmitted= true;
    console.log(`All form details`, this.reactiveForm);
    console.log(`All form Value`, this.reactiveForm.value);

    // console.log(`new calender`,this.selected.toDateString());
    
    console.log(`Email : `, this.reactiveForm.value.email);
    console.log(`Subscription :`, this.reactiveForm.value.subscription);
    console.log(`Password :`, this.reactiveForm.value.password);
    console.log(`Date :`, this.reactiveForm.value.date);


    // for warning msg
    if ((this.reactiveForm.invalid== true) && (this.reactiveForm.touched==true)) {
      console.log(`form is Touched and its Invalid`);
      this.warningMessage = " *** Warning Message : This Field is Manditary";
      this.disableErrMsg=false;
    }
  }

  // testing another calender type
  // selected: Date | null;
  ngOnInit() {
  }

}
