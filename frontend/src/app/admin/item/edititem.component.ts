import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { Item } from '../../model/item';
import { Category } from '../../model/category';
import { Brand } from '../../model/brand';
import { ItemService } from '../../service/item.service';
import { ConstantsService } from '../../service/constants.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.scss']
})
export class EdititemComponent implements OnInit {

  item : Item;

  categories : Category[];
  brands : Brand[];
  category : Category[];

  constructor(
    private itemService : ItemService,
    private constantsService : ConstantsService,
    private dialogRef: MatDialogRef<EdititemComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private router:ActivatedRoute
    ) { }


    name = new FormControl('', [Validators.required]);

    getErrorMessage() {
      return this.name.hasError('required') ? 'You must enter a name' : '';
    }
  


  ngOnInit( ) {

     this.item = this.data.item;
     this.constantsService.getCategories().subscribe(categories => {
        this.categories = categories;
     });
 
     this.constantsService.getBrands().subscribe(brands => {
       this.brands = brands;
     });
  
   }
  dismiss() {
    this.dialogRef.close(null);
  }


  save() {
  
    this.itemService.updateIteme(this.item.id,this.item).subscribe(item => {
       this.dialogRef.close(item);
   });
}

}
