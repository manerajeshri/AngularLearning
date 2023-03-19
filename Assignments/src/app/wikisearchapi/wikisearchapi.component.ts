import { Component, OnInit } from '@angular/core';
import { WikisearchapiService } from '../services/wikisearchapi.service';

@Component({
  selector: 'app-wikisearchapi',
  templateUrl: './wikisearchapi.component.html',
  styleUrls: ['./wikisearchapi.component.css']
})
export class WikisearchapiComponent implements OnInit {

  // variable
receivedData;

  // 4] DI and import WikisearchapiService
  constructor(private wikisearchapiService : WikisearchapiService) { }

  ngOnInit() {

    // this.wikisearchapiService.getData1().subscribe(res=>{
    //   console.log(`res`,res);
    //   this.receivedData=res;
    //       })
    }

// on search value
onSearch(searchValue){
  
  // 
    this.wikisearchapiService.search_Value=searchValue;
  // fetch data from server
    this.wikisearchapiService.getData1().subscribe(res=>{
    console.log(`res`,res);
    this.receivedData=res;
      })


}


  }


