
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../service/item.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../model/item';
import { CartService } from '../../service/cart.service';
// import { Lightbox } from 'ngx-lightbox';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  item: Item;
  image_url: String  = '';
  _albums  = [];

  constructor( private itemservice: ItemService, private router: ActivatedRoute, private cartService: CartService
        // ,private _lightbox: Lightbox
        ) {
    // for (let i = 1; i <= 4; i++) {
    //   const src = 'assets/img//team-' + i + '.jpg';
    //   const caption = 'Image ' + i + ' caption here';
    //   const thumb = 'assets/img/team-' + i + '_t.jpg';
    //   const album = {
    //      src: src,
    //      caption: caption,
    //      thumb: thumb
    //   };

    //   this._albums.push(album);
  //  }

}

  ngOnInit() {
    this.image_url = this.itemservice.domain_url + '/images/items';
    const id = +this.router.snapshot.paramMap.get('id');
    this.itemservice.getItem(id)
      .subscribe(item => this.item = item);

  }

  onAddToCart() {
    this.cartService.addProductToCart(this.item);
  }


  // open(index: number): void {
  //   // open lightbox
  //   this._lightbox.open(this._albums, index);
  // }

  // close(): void {
  //   // close lightbox programmatically
  //   this._lightbox.close();
  // }

}

