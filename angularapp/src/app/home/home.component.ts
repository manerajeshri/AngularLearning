import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { map} from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private firebaseService : FirebaseService) { }

  ngOnInit() {
console.log(`receiveddata`,this.receiveddata);

  }
  createPost(){
    this.firebaseService.createPost().subscribe(res=>{
      console.log(`Firebase POST data`, res);
      
    })
  }

receiveddata;
getData(){
    this.firebaseService.getPostDataFirebase()
    .pipe(map(resData =>{
      console.log(resData);
      const dataArray=[];
      for(const key in resData){
      // console.log(key);
      // console.log(resData[key]);
      dataArray.push({id:key,...resData[key]})
      }
return dataArray

    }))
    .subscribe(res=>{
      console.log(`Firebase Get Data`, res);
      this.receiveddata = res;
    })
  }

}
