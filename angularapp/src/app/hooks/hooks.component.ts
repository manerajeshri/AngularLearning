import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges {

  // declare variable
  @Input() parentData : number ;
  constructor(private demoservice : DemoService) { 
    console.log(`HooksComponent constructor called`);
  }
  myObservable;
ngOnInit() :void {
  console.log(`HooksComponent ngOnInit Called.`);
  // use when we want to display / fetch data from API
  this.demoservice.getUsers().subscribe(res=>{
    console.log(`res from ngOnInit`,res);
    // 

    this.myObservable = of('This is custom observable').pipe(delay(3000));
  })
}

  // 1] OnChanges
  ngOnChanges(changes: SimpleChanges): void {
    console.log ('HooksComponent ngOnChanges Called.',changes);
  }

 



}
