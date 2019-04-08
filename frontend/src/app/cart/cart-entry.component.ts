import { ItemService } from 'src/app/service/item.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { FiltersComponent } from './component/filters.component';
import { SearchBarComponent } from './component/search-bar.component';

import { CartService } from '../service/cart.service';
import { Category } from '../model/category';
import { ConstantsService } from '../service/constants.service';
import { Item } from '../model/item';


@Component({
  selector: 'app-cart-entry',
  templateUrl: './cart-entry.component.html',
  styleUrls: ['./cart-entry.component.scss']
})
export class CartEntryComponent  {


}
