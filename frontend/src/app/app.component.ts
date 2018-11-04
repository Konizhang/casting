import { Component } from '@angular/core';

import { ActivatedRoute } from "@angular/router"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  id : number ;

  myclass : String;

  constructor(private activatedRoute : ActivatedRoute){  }
  ngOnInit() {

    this.myclass ="fixed-top";
    this.activatedRoute.url.subscribe(url =>{
     // console.log(url);
   });
  
  }

}
