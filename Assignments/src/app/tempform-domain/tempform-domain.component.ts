import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-tempform-domain',
  templateUrl: './tempform-domain.component.html',
  styleUrls: ['./tempform-domain.component.css']
})
export class TempformDomainComponent implements OnInit {


// creating class for email err


// email="";
domain : string=""
enableButton : boolean =true;
errMessage = "";
  constructor() { }

  ngOnInit() {
  }

  onClickNext(formdata : NgForm){

    console.log(formdata);
    console.log(formdata.value.email);
    
// console.log(formdata.value.email);
//  this.domain = formdata.value.email.match("@codemindtechnology.com")
// console.log(`this.domain`,this.domain);

// if (this.domain !=null) {
//   console.log( " valid Email");
//   this.errMessage = " "
   
// } else {
//   // this.enableButton = false;
//   console.log("Invalid Email.Enter valid Email Eg. abc@codemindtechnology.com");
//   this.errMessage = "Invalid Email.Enter valid Email Eg. abc@codemindtechnology.com"
// }

// formdata.reset(); // to reset form
  }

}
