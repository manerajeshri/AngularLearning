import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { map,filter} from 'rxjs/operators'
import { of,from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private firebaseService : FirebaseService) { }

  ngOnInit() {
// console.log(`receiveddata`,this.receiveddata);

// //emit (1,2,3,4,5)
// const source= from([1,2,3,4,5]);

// // filterout non even numbers

// const example = source.pipe(filter(num => num%2 === 0));
// example.subscribe(res => {
//   console.log(`Even number :${res}`);
// })


// const obs = of(1,2,3).pipe(
//   map(x => x+1 )
// ).subscribe(res=> {
//   console.log(`obs of`, res);
// })


  }
  createPost(){
    this.firebaseService.createPost().subscribe(res=>{
      console.log(`Firebase POST data`, res);
      
    })
  }

receiveddata;
// getData(){
//     this.firebaseService.getPostDataFirebase()
//     .pipe(map(resData =>{
//       console.log(resData);
//       const dataArray=[];
//       for(const key in resData){
//       // console.log(key);
//       // console.log(resData[key]);
//       dataArray.push({id:key,...resData[key]})
//       }
// return dataArray

//     }))
//     .subscribe(res=>{
//       console.log(`Firebase Get Data`, res);
//       this.receiveddata = res;
//     })
  // }


  getData(){
    this.firebaseService.getPostDataFirebase().pipe(
      map(responseData => {
        console.log(`before manipulate data`, responseData);
        
        // empty array
        const postArray = [];
        // for in loop
        for (const key in responseData) {
          // check the keys
          if (Object.prototype.hasOwnProperty.call(responseData, key)) {
            const element = responseData[key];
            // push new value into array
            postArray.push({...responseData[key],id:key})
            
          }
        }
        return postArray
      })
    ).subscribe(res=>{
      console.log(`aftermanipulate data`, res);
      
    })
  }



}
