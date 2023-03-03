import { Component, OnInit } from '@angular/core';
import { DemoService } from './services/demo.service';
import { MyserviceService } from './services/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// add implements OnInit
export class AppComponent implements OnInit {
  title = 'angularapp';

 
  // creating empty array
products = {};
users : any=[];
username :string=''
  // DI 
  constructor(private myservice : MyserviceService, private demoservice: DemoService){ }
  ngOnInit(): void {

    // taking array from service
    this.products = this.myservice.products;  
     this.users=  this.demoservice.getUsers().subscribe(res=>{
      console.log('user api results',res);
      this.users=res;
    }, err=> {
      console.log(err);
      
    }) 
    
    
  }
}
