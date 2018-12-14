import { Component, OnInit, Input } from '@angular/core';

import { CartService } from '../../service/cart.service';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() item: Item;
  image_url : String  = "";
  detailViewActive: boolean

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.detailViewActive = false;
    if(this.item.image){
    this.image_url = this.cartService.domain_url+"/images/items/item-"+this.item.image+".png";
    }else{
      this.image_url = "../../assets/img/itemicon.png";
    }
  }

  onProductClick(){
    this.detailViewActive = !this.detailViewActive
  }

  onAddToCart(){
    this.cartService.addProductToCart(this.item)
  }

}
