import { Item } from './../../model/item';
import { Component, OnInit, Input } from '@angular/core';

import { CartService } from '../../service/cart.service';

@Component({
  selector: 'showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  @Input() items: Item[]

  constructor(private cartService: CartService) {

  }

  ngOnInit() { 
  }
}
