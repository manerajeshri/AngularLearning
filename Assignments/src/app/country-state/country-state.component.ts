import { Component, OnInit } from '@angular/core';
import { Country } from '../modules/country';
import { StateClass } from '../modules/state';

@Component({
  selector: 'app-country-state',
  templateUrl: './country-state.component.html',
  styleUrls: ['./country-state.component.css']
})
export class CountryStateComponent implements OnInit {

  // Adding titile
  title :string =" Country and State : using dropdown";

// Take Country Array and add two countries
arrayOfCountry =["India","United States"]

// Take state Array
arrayOfStateIndia =[ "Andhra Pradesh", "Bihar","Chhattisgarh","Goa","Haryana","Maharashtra"]
arrayOfStatesUS =["California","Georgia", "Indiana","New York","North Carolina","Georgia"]

// taking Object 
  // objIndia : StateClass[]

  constructor() { }
  selectedCountry :string[] ;

  // objarray :{ "hi",1,5}
  ngOnInit() {
  }

  // read from country dropdown   
    onSelected(value:string): void {
      
      console.log(`value`,value);

      if (value == "India") {
        console.log(`Selected Country India`);
        this.selectedCountry = this.arrayOfStateIndia;
        
      } else if (value == "United States") {
        console.log(`Selected Country United States`);
        this.selectedCountry = this.arrayOfStatesUS;
      }
      else {
        this.selectedCountry = [];
      }
      
    }
  }



