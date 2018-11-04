import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';
import { Item } from '../model/item';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private itemService : ItemService) { }

  items : Item[]  = null;


  ngOnInit() {
  
  this.itemService.getItems().subscribe(resp => {
    this.items = resp;
  });
  
  
  
  }

}
