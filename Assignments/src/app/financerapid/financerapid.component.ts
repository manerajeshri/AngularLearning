import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../services/rapidapi.service';

@Component({
  selector: 'app-financerapid',
  templateUrl: './financerapid.component.html',
  styleUrls: ['./financerapid.component.css']
})
export class FinancerapidComponent implements OnInit {


  // creating vatiable for news and quotes
  receivedObj={};
  
  // DI
  constructor(private rapidapiService : RapidapiService) { }

  ngOnInit() {
this.rapidapiService.getFinance().subscribe(res=> {
  console.log(`Finance data received from rapid`, res);
this.receivedObj=res;
console.log(`receivedObj`, this.receivedObj);


})

  }

}
