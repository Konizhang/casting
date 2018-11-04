import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../shared/material.module';
import { AdminHomeComponent } from './adminhome/adminhome.component';

import { AdminRoutingModule } from './admin.routing';
import { AdditemComponent } from './item/additem.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { NewContactDialogComponent } from './new-contact-dialog/new-contact-dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllitemComponent } from './item/allitem.component';
import { ConstantsService } from '../service/constants.service';
import { ItemService } from '../service/item.service';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { DialogService } from '../service/dialog.service';
import { NotificationService } from '../service/notification.service';
import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule,
    ImageCropperModule
   ],
  declarations: [
    AdditemComponent,
    AdminComponent,
    AdminHomeComponent,
    MainContentComponent,
    SidenavComponent,
    ToolbarComponent,
    NewContactDialogComponent,
    DashboardComponent,
    DashboardComponent,
    AllitemComponent,
    MatConfirmDialogComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
  providers: [ItemService,ConstantsService,DialogService,NotificationService,],
  bootstrap: [
    NewContactDialogComponent,MatConfirmDialogComponent
  ]
})
export class AdminModule { }
