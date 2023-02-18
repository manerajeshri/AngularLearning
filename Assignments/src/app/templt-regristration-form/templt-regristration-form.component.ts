import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templt-regristration-form',
  templateUrl: './templt-regristration-form.component.html',
  styleUrls: ['./templt-regristration-form.component.css']
})
export class TempltRegristrationFormComponent implements OnInit {

  // for password
  hide = true;
  msg : string="";
  isPasswordMatch:boolean;

  confirmPassword(receivedFormDetails : NgForm){
// console.log(`receivedFormDetails`,receivedFormDetails);
console.log(`password`,receivedFormDetails.value);
console.log(`password`,receivedFormDetails.value.password);
console.log(`Confirm password`,receivedFormDetails.value.cPassword);
if (receivedFormDetails.value.password !== receivedFormDetails.value.cPassword) {
  this.msg = "Passwords Dosen't Match!"
  this.isPasswordMatch = true;
} else {
  this.isPasswordMatch =false;
  this.msg ="";
  alert("Submitted Sucesfully!!")
receivedFormDetails.reset();
}


  }
  constructor() { }

  ngOnInit() {
  }

}

