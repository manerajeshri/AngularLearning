import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  myname = 'rajeshri';
  myMethodVariable;
  count: number = 0;
  // variable for two way data binding
  twoWayBinding : string="two Way Binding";
  
  
  // string interpolation variable from object
  obj ={
    id :1,
    name : 'Aaradhya'
  }

  // string interpolation variable from array
  array =[1,2,3,'A','B'];

// string interpolation variable from array of objects

arrayOfObject =[
   {
    id :1,
    name : 'Aaradhya'
  },
  {
    id :2,
    name : 'Rajeshri'
  },
  {
    id :3,
    name : 'Amol'
  },

]


// Property Binding ==>  one way Data Binding
imgUrl = "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?cs=srgb&dl=pexels-pixabay-162140.jpg&fm=jpg"
testDiv = "Property Binding testDiv "


  constructor() {
    this.myMethod();
    console.log(`twoWayBinding`, this.twoWayBinding);
    
   }

// string interpolation variable from method, need to call method in comstructor
myMethod(){
  this.myMethodVariable = '****** myMethodVariable is this***'
}

// Event Binding onButtonClick
onButtonClick(){
 console.log(`Button was clicked`);
 this.count=this.count+1
 
}
// Event Binding onKeyUp()
onKeyUp(receivedValue){
// console.log(`Key Entered = receivedValue`, receivedValue);
console.log(`entered value is : `, receivedValue.target.value);


}

  ngOnInit() {
    
  }

}
