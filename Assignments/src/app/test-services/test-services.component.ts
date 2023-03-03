import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';

@Component({
  selector: 'app-test-services',
  templateUrl: './test-services.component.html',
  styleUrls: ['./test-services.component.css']
})
export class TestServicesComponent implements OnInit {

  // declaring variables
  dob;
  showAge;

  // Giving Dependancies Injection in constructor
  constructor(private objService : MyserviceService) { }

  ngOnInit() {

    // let objPrint = new MyserviceService();
    this.objService.print();

    // let objDisplay = new MyserviceService();
    this.objService.display();
  }
// calling method from services
ageCalculator(){
  // let objMyserviceService = new MyserviceService();
  this.showAge = this.objService.ageCalculator(this.dob);
}

onClick(){
  // let objDisplay = new MyserviceService();
  this.objService.display();
}

}
