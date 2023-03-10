import { Component, OnInit } from '@angular/core';
import { DemoService } from './services/demo.service';
import { MyserviceService } from './services/myservice.service';
import { RapidService } from './services/rapid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// 3] add implements OnInit
export class AppComponent implements OnInit {
  title = 'angularapp';

 
  // creating empty array
products = {};
users : any=[];
searchByName :string=''
  //2] DI 
  constructor(private rapidservice : RapidService,private myservice : MyserviceService, private demoservice: DemoService){ }

  // 4] write  ngOnInit()
  ngOnInit(): void {
//
// data from rapid 

this.rapidservice.getFinance().subscribe(res=>{
  console.log(`rapid res`, res);
  
})

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
