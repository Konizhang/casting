import { map } from 'rxjs/operators';

import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';
import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar, MatSnackBarRef, SimpleSnackBar, MatTableDataSource, MatPaginator, MatSort, MatDialogConfig } from '@angular/material';

import { Router } from '@angular/router';
import { AdditemComponent } from './additem.component';
import { Item } from '../../model/item';
import { ItemService } from '../../service/item.service';
import { NotificationService } from '../../service/notification.service';
import { DialogService } from '../../service/dialog.service';
import { ConstantsService } from '../../service/constants.service';
import { Category } from '../../model/category';
import { Brand } from '../../model/brand';
import { forkJoin, Observable } from 'rxjs';


@Component({
  selector: 'app-allitem',
  templateUrl: './allitem.component.html',
  styleUrls: ['./allitem.component.scss']
})
export class AllitemComponent implements OnInit {

  categories : Category[];
  brands : Brand[];
  items : Item[] ;
  displayedColumns = ['name', 'description', 'partnumber','category', 'brand', 'weight', 'material','actions'];
  dataSource: MatTableDataSource<Item>;
  post1: any;
  post2: any;

  constructor(private snackBar: MatSnackBar,private dialog: MatDialog, private itemService : ItemService, private constantsService :ConstantsService,
    private dialogn: MatDialog,
    private notificationService: NotificationService,
    private dialogService: DialogService) { 
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {

  }

  ngOnInit() {

   let categories =   this.constantsService.getCategories();
   let brands  =  this.constantsService.getBrands();

    forkJoin([categories, brands]).subscribe(result=>{
      this.categories = result[0];
      this.brands = result[1];
      this.itemService.getItems().subscribe(items => {
        // 
         let itemarray = items.map(item => {
           
           let brand = this.constantsService.getObjectName( this.brands,item['brand_id']);
           let category = this.constantsService.getObjectName( this.categories,item['category_id']);
           return {
             id: item.id,
             brand,
             category,
             ...item
           };
           },
         ); 
         this.items = itemarray;
         this.dataSource = new MatTableDataSource<Item>(itemarray);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;
        });
    })
  //   .mergeMap(result => {
  //     this.categories = result[0];
  //     this.brands = result[1];
  //     return  this.itemService.getItems().subscribe(items =>
     
  //       {
  //         let itemarray = items.map(item => {
      
  //           let brand = this.constantsService.getObjectName( this.brands,item['brand_id']);
  //           let category = this.constantsService.getObjectName( this.categories,item['category_id']);
  //           return {
  //             id: item.id,
  //             brand,
  //             category,
  //             ...item
  //           };
  //           },
  //         ); 

  //        }   
  //     )
  //   })
  //   .subscribe(items=>this.items = items);






   
  }


  openAddContactDialog(): void {

    let dialogRef = this.dialog.open(AdditemComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      if (result) {
        this.openSnackBar("Item added", "New")
          .onAction().subscribe(() => {
            this.openAddContactDialog();
          });
      }
    });
  }

  openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onEdit(item){
  
    this.itemService.populateForm(item);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
     this.dialog.open(AdditemComponent,dialogConfig);
  }

  onDelete($key){

    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.itemService.deleteIteme($key).subscribe( resp =>{
          this.ngOnInit();
          this.notificationService.warn('Deleted successfully');
        }
      );
       
      }
    });
  }



}
