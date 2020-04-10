import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Item } from 'src/app/model/item';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent implements OnInit {
  @Input() item: Item;
  image_url: String  = '';
  detailViewActive: boolean;

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.detailViewActive = false;
    if (this.item.image) {
    this.image_url = this.cartService.domain_url + '/images/items/' + this.item.partnumber + '.jpg';
    } else {
      this.image_url = '../../assets/img/itemicon.png';
    }
  }

  onProductClick(){
    this.detailViewActive = !this.detailViewActive;
  }

  onAddToCart() {
    this.cartService.addProductToCart(this.item);
  }

}
