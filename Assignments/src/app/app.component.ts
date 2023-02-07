import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignments';
  
  display = [];
  sendToParent(receivedData : any){
    console.log(`received Data:`,receivedData);
    this.display.push(receivedData);
    
  }



}
