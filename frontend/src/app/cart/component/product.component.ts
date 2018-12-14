
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../service/item.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../model/item';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  item: Item;
  image_url : String  = "";
  constructor( private itemservice:ItemService,private router:ActivatedRoute) 
  { }

  ngOnInit() {
    this.image_url = this.itemservice.domain_url+"/images/items";
    const id = +this.router.snapshot.paramMap.get('id');
    this.itemservice.getItem(id)
      .subscribe(item => this.item = item);

  }
}

