import { ItemService } from './../../service/item.service';
import { Category } from './../../model/category';
import { Item } from './../../model/item';
import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConstantsService } from './../../service/constants.service';

import { Brand } from '../../model/brand';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})

export class AdditemComponent implements OnInit {

  item : Item;

  categories : Category[];
  brands : Brand[];
  category : Category[];
  imageUrl: string = "/assets/img/logo.png";
  fileToUpload: File = null;

  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  imageLoaded() {
      // show cropper
  }
  loadImageFailed() {
      // show message
  }
  constructor(
    private itemService : ItemService,
    private constantsService : ConstantsService,
    private dialogRef: MatDialogRef<AdditemComponent>,
    @Inject(MAT_DIALOG_DATA) public data
    ) { }

  name = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }

  ngOnInit( ) {
   this.item = new Item();

   let categories =   this.constantsService.getCategories();
   let brands  =  this.constantsService.getBrands();
   forkJoin([categories, brands]).subscribe(result=>{
      this.categories = result[0];
      this.brands = result[1];
    });

  }

  save() {
      this.item.image = this.croppedImage;
      this.itemService.addItem(this.item).subscribe(item => {
         this.dialogRef.close(item);
     });
  }

  dismiss() {
    this.dialogRef.close(null);
  }


  // handleFileInput(file: FileList){

  //   this.fileToUpload = file.item(0);

  //   //Show image preview
  //   var reader = new FileReader();
  //   reader.onload = (event:any) => {
  //     this.imageUrl = event.target.result;
  //   }
  //   reader.readAsDataURL(this.fileToUpload);
  // }

}
