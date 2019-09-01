import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { BaseService } from './BaseService';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CartService extends BaseService{

  items: any[] = [];
  cartTotal = 0;
  endpoint  = 'quotes' ;

  private productAddedSource = new Subject<any>()

  productAdded$ = this.productAddedSource.asObservable();

  constructor(private http: HttpClient) {
    super();
    this.http = http;
}



  addProductToCart(product){
    console.log(product);
    let exists = false;
    let parsedPrice = 0.1;
    // parseFloat(product.price.replace(/\./g, '').replace(',', '.'))
    this.cartTotal += parsedPrice;
    // Search this product on the cart and increment the quantity
    this.items = this.items.map(_product => {
      if(_product.product.id == product.id){
        _product.quantity++;
        exists = true;
      }
      return _product;
    })

    // Add a new product to the cart if it's a new product
    if(!exists){
      product.parsedPrice = parsedPrice;
      this.items.push({
        product:product,
        quantity:1
      })
    }

    this.productAddedSource.next({ products: this.items, cartTotal: this.cartTotal })
  }

  deleteProductFromCart(product){
    this.items = this.items.filter(_product => {
      if (_product.product.id == product.id) {
        this.cartTotal -= _product.product.parsedPrice*_product.quantity;
        return false;
      }
      return true;
     });
    this.productAddedSource.next({ products: this.items, cartTotal: this.cartTotal });
  }


  flushCart(){
    this.items = []
    this.cartTotal = 0
    this.productAddedSource.next({ products: this.items, cartTotal: this.cartTotal })
  }

  submitQuote(quotes){
     return  this.http.post(this.base_url + '/' + this.endpoint, quotes);
  }


  displayItems(){
    let i = this.items.length;
    return i;
 }

  displayProduct(){
    let i = this.items;
    return i;
  }
}
