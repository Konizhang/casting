import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { increment, decrement, reset } from '../store/counter.actions';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  public numProduct: number;
  public show: boolean;
  count$: Observable<number>;

  constructor(private cartService: CartService, private router: Router,
    private activatedRoute: ActivatedRoute, private store: Store<{ count: number }>) {

      this.count$ = store.pipe(select('count'));
    }

  ngOnInit() {
   this.numProduct =  this.cartService.displayItems();

   if ('shop' === this.activatedRoute.snapshot.url[0].path || this.numProduct === 0) {
     this.show = false;
   } else {
     this.show = true;
   }

  }

}
