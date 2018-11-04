
import { Component, ElementRef, OnInit,Renderer2 } from '@angular/core';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  headerfixed:string ;
  

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
    ) { this.headerfixed = ""; }

  ngOnInit() {
    // this.el.nativeElement.style.color = 'blue';
  }

}
