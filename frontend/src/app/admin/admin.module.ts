import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:  [
    AddItemComponent
  ],
  declarations: [AddItemComponent]
})
export class AdminModule { }
