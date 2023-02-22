import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-sir',
  templateUrl: './ng-if-sir.component.html',
  styleUrls: ['./ng-if-sir.component.css']
})
export class NgIfSirComponent implements OnInit {

  post =[
    {
      title : "Neat Tree",
       imageUrl: 'http://www.thewowstyle.com/wp-content/uploads/2015/01/nature.jpg',
      content : "I saw this Tree"
    },{
      title : "rose Tree",
      //  imageUrl: 'http://www.thewowstyle.com/wp-content/uploads/2015/01/nature.jpg',
      content : "I saw this Tree"
    },{
      title : "mango Tree",
       imageUrl: ' ',
      content : "I saw this Tree"
    },{
      title : "apple Tree",
       imageUrl: 'http://www.thewowstyle.com/wp-content/uploads/2015/01/nature.jpg',
      content : "I saw this Tree"
    },{
      title : "neem Tree",
       imageUrl: 'http://www.thewowstyle.com/wp-content/uploads/2015/01/nature.jpg',
      content : "I saw this Tree"
    }
  ]
  
  
  showme : boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
