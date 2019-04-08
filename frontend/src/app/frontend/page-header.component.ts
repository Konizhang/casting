import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  private numProduct : number;
  private show : boolean;


  constructor(private cartService: CartService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   this.numProduct =  this.cartService.displayItems();

   if("shop"==this.activatedRoute.snapshot.url[0].path || this.numProduct==0){
     this.show =false;
   } else{
    this.show =true;
   }

  }

}
