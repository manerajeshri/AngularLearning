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

// taking Object for country and state from class Country
  objCountryState: Country = {
  country: ["India", "Australia","UnitedStates"],
  India: ["Andhra Pradesh", "Bihar","Chhattisgarh","Goa","Haryana","Maharashtra"],
  Australia: ["Western Australia","Queensland","Tasmania"],
  UnitedStates : ["California","Georgia", "Indiana","New York","North Carolina","Georgia"]
}

  constructor() { }
  selectedCountry :string[] ;
  selectedCountry1 :string ;
  ngOnInit() {
  }

  // read from country dropdown   
    onSelected(value:string): void {
      
      // console.log(`value`,value);

      if (value == "India") {
        // console.log(`Selected Country India`);
        this.selectedCountry = this.arrayOfStateIndia;
        
      } else if (value == "United States") {
        // console.log(`Selected Country United States`);
        this.selectedCountry = this.arrayOfStatesUS;
      }
      else {
        this.selectedCountry = [];
      }
      
    }
// for using class and object
mySelectedCountry = ""
    onSelected1(value:string): void {
      
      console.log(`Selected Country is :`,value);
        
      

      for (const key in this.objCountryState) {
          // console.log(`key`, key);
          
          if (value==key) {

            console.log(`key`, key);
            this.selectedCountry1 = key
          //   const element = this.objCountryState[key];
          // console.log(`key :`, key, "==>", `element`, element );
          // this.selectedCountry1 = this.objCountryState[key];
          console.log(`selectedCountry1`, this.selectedCountry1);
          
          
          }
          
          
      }
}
}