import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  id: number ;

  myclass: String;

  constructor(private activatedRoute: ActivatedRoute){  }
  ngOnInit() {

    this.myclass = 'fixed-top';
    this.activatedRoute.url.subscribe(url => {
     // console.log(url);
   });

  }

}
