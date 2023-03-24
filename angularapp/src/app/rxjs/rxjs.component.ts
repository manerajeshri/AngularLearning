import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, from, interval, of, timer } from 'rxjs';
import { map, mergeMap, take, takeLast, takeUntil } from 'rxjs/operators';

// for forkjoin using two interfaces
interface User {
  id: number;
}

interface Post {
  id: number;
}


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  // for forkjoin using two url
  USERS = 'https://jsonplaceholder.typicode.com/users';
  POSTS = 'https://jsonplaceholder.typicode.com/posts';

// creating array to store data for forkjoin
data: [User[],Post[]];

// DI
  constructor(http : HttpClient) { 

// forkjoin : IMP interview 
    // performing multiple HTTP request in angular then we can use forkjoin
    // if we are calling 2-3 API 
    const users =http.get<User[]>(this.USERS);
    const posts = http.get<Post[]>(this.POSTS);

    // forkJoin to combine data coming from diffrent servers
    // no multiple subscribe, avoid nested subscription
    
    forkJoin([users,posts]).subscribe(res=>{
        this.data =res;
        console.log(`User and Post data`,res);
        
    })

  }


// meargemap
  getData(data) {
    return of(data + ' Video uploaded');
  }


  ngOnInit() {
    // rxjs of operator print the whole array at once
    const ofobs = of([1, 2, 3]);
    ofobs.subscribe((res) => {
      console.log(`of example`, res);
    });

    // rxjs from operator prints the element one by one
    const fromObs = from([1, 2, 3]);
    fromObs.subscribe((res) => {
      console.log(`from example`, res);
    });

    // take operator
    const source = interval(1000);
    source
      .pipe( // pipe will change multiple other operator to single
        take(5) // to get first 5 values from observable from start
      )
      .subscribe((res) => {
        console.log(`take operator`, res);
      });

    // take last values from observable

    let randomNames = ["raj", "pune", "satara", "mumbai", "kolhapur"];
    const result = from(randomNames);
    result.pipe(
      takeLast(2)
      ).subscribe((res) => {
      console.log(`take last Example`, res);
    });

    // take until

    const custObs = interval(1000);
    let condition = timer(6000);

    custObs.pipe(
      takeUntil(condition))
      .subscribe((res) => {
      console.log(`take until`, res);
    });

    // mergeMap : in this we get data from 1st API and send request to 2nd API to get data from 2nd API.
// i.e. output of first will be send as request to 2nd.  2nd API is depend on 1st API
    const obs1 = from(["Tech", "Comedy", "News"]);

    // nested Subscription without 

    // obs1.pipe(
    //   map(res => this.getData(res))
    // ).subscribe(res => res.subscribe(res2 => { 
    //   console.log(res2);
    // }));

// using mergeMap

    obs1.pipe(mergeMap((res) => this.getData(res))).subscribe((res) => {
      console.log(res);
    });

    
  }

}