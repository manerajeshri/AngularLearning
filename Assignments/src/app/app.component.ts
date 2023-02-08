import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignments';
  
  display = [];
  sendToParent(receivedData : string | number){
    console.log(`received Data:`,receivedData);
    this.display.push(receivedData);
    console.log(this.display);
  }  
}

export class ReceivedDataFromChild{
  idClass: number;
  nameClass: string;
  cityClass: string

  constructor(){
    this.idClass ,
    this.nameClass ,
    this.cityClass
  }

}


// let parentDisplayData= new ReceivedDataFromChild()