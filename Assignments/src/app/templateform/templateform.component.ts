import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(form : NgForm){
    console.log(`form contents : form.values : `,form.value);
    console.log(`is Form valid? : `,form.valid); // to get form is valid or not use .valid

  }
x: number=0;
y: number=0;
sum : number;
  Add(form : NgForm){
  this.x= +(form.value.num1)
  this.y= +(form.value.num2)
  this.sum = this.x + this.y;
   console.log(`num1 + num2 = :` , this.x + this.y );
   console.log(`validation:`, form.valid);
   
  }
}
