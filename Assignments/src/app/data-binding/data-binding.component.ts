import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

// 1] One way data binding ts --> html string interpolation {{ }}
  // string
  firstName:string="Rajeshri";
// Array
arrNum:number[]=[11,22,33,44];
arrayOfName : string[] = ["a","b",'c','d'];
//  objects
emp={
  id : 77,
  course : "Angular"
}
emp1={
  id : 78,
  course : "js"
}
emp2={
  id : 79,
  course : "Ts"
}

// Array of Objects
// arrayOfEmp :any []=[this.emp , this.emp1 , this.emp2  ]

arrayOfEmp :any []=[
{
  name: "emp5", city:"satara"
},
{
  name: "emp6", city:"pune"
},
{
  name: "emp7", city:"mumbai"
}

  
  ]

// 2] One way Ts to html Property binding ==== Binding Image
// imgUrl=''
imgUrl="https://imgd.aeplcdn.com/1280x720/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0&q=80";

// One way Ts to html Property binding ==== Binding Audio
// audUrl="https://www.computerhope.com/jargon/m/example.mp3";
audUrl='https://pagalworldl.com/files/download/id/16704'

 // One way Ts to html Property binding ==== Binding Video
//  vdoUrl="https://www.youtube.com/watch?v=tlunj_2Wojo";
// vdoUrl="E:\Angular\AngularLearning\Assignments\src\app\data-binding\video_running";


// 3] One way data binding : HTML to Ts : Event binding
count : number=0

// Button click
onClick(){
  console.log("Button clicked");
  //  to count button clicks
  this.count+=1 // this.count = this.count +1
}

// on text box event
textByUser : string = ""
onKeyUp(receivedData){
console.log(receivedData);
this.textByUser = receivedData.target.value
}

// myFunction() {
//   console.log("You wrote: " );
   
// }

// Two way data bonding
receivedFromHtml : string= "Enter your data here"
mydata: string ='Enter data here'
  constructor() {
    
    
   }

  ngOnInit() {
  }

}
