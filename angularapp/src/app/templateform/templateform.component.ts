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

  emails='';

  // isdisabled :boolean= false; not required
  login(form : NgForm){
    console.log(`form contents : form.values : `,form.value);
    console.log(`is Form valid? : `,form.valid); // to get form is valid or not use .valid
    
    
  }
}
