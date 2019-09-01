import { Quote } from './../../model/quote';
import { Component, OnInit, ChangeDetectorRef ,Input} from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Subscription, Observable } from 'rxjs';
import { NotificationService } from '../../service/notification.service';
import { Store, select } from '@ngrx/store';

const OFFSET_HEIGHT: number = 250
const PRODUCT_HEIGHT: number = 30

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: any[] = []
  numProducts: number = 0;
  animatePlop: boolean = false;
  animatePopout: boolean = false;
  expanded: boolean = false;
  expandedHeight: string;

  cartTotal: number = 0;
  username:string
  email:string
  showmsg: boolean = false;
  changeDetectorRef: ChangeDetectorRef;

  count$: Observable<number>;

  @Input() inputNumProducts: number;

  constructor(public cartService: CartService, private notificationService: NotificationService,
    changeDetectorRef: ChangeDetectorRef,private store: Store<{ count: number }>) {
    this.changeDetectorRef = changeDetectorRef;
    this.count$ = store.pipe(select('count'));
    this.numProducts =  this.cartService.displayItems();

  }

  ngOnInit() {
 //   this.numProducts = this.inputNumProducts;
    this.numProducts =  this.cartService.displayItems();
    this.expandedHeight = '0';
    this.products = this.cartService.displayProduct();
    this.cartService.productAdded$.subscribe(data => {
      this.products = data.products;
      console.log('in product length', this.products);
      this.cartTotal = data.cartTotal;
      this.numProducts = data.products.reduce((acc, product) => {
        acc += 1;
        return acc
      }, 0);

      // Make a plop animation
      if(this.numProducts > 1){
        this.animatePlop = true;
        setTimeout(() =>{
          this.animatePlop = false;
        },160)
      } else if (this.numProducts == 1){
        this.animatePopout = true;
        setTimeout(()=>{
          this.animatePopout = false;
        },300)
      }
      this.expandedHeight = (this.products.length * PRODUCT_HEIGHT + OFFSET_HEIGHT) + 'px';
      if (!this.products.length){
        this.expanded = false;
      }
      this.changeDetectorRef.detectChanges();

    });

    if(this.numProducts>0){
      this.expandedHeight = (this.products.length * PRODUCT_HEIGHT + OFFSET_HEIGHT) + 'px';
    }

  }

  deleteProduct(product){
    this.cartService.deleteProductFromCart(product)
  }

  onCartClick(){
    this.expanded = !this.expanded;
  }

  onquota(){

  if(this.username == undefined||this.email ==undefined){
    this.showmsg = true ;
  }else{
    let  quote = new Quote(this.username,this.email,this.products);

    this.cartService.submitQuote(quote).subscribe(result => {
    console.log(result)
    this.notificationService.success('We will quote you shortly');
   });
   // send your action to backend send a quote
   this.cartService.flushCart();


  }


  }

}
