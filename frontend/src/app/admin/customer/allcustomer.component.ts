import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { MatDialog, MatSnackBar, MatSnackBarRef, SimpleSnackBar, MatTableDataSource, MatPaginator, MatSort, MatDialogConfig } from '@angular/material';
import { NotificationService } from 'src/app/service/notification.service';

import { DialogService } from 'src/app/service/dialog.service';
import { forkJoin } from 'rxjs';

import { CustomerService } from 'src/app/service/customer.service';
import { AddcustomerComponent } from './addcustomer.component';
import { EditcustomerComponent } from './editcustomer.component';

@Component({
  selector: 'app-allcustomer',
  templateUrl: './allcustomer.component.html',
  styleUrls: ['./allcustomer.component.scss']
})
export class AllcustomerComponent implements OnInit {



  customers : Customer[] ;
  displayedColumns = ['companyname', 'contact', 'phoneumber','email', 'address', 'country', 'comments','actions'];
  dataSource: MatTableDataSource<Customer>;
  
  existingcustomer :Customer;


  constructor(private snackBar: MatSnackBar,private dialog: MatDialog, private customerService : CustomerService,
    private dialogn: MatDialog,
    private notificationService: NotificationService,
    private dialogService: DialogService,
    private changeDetectorRefs: ChangeDetectorRef) { 
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {

  }

  ngOnInit() {

    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
      this.dataSource = new MatTableDataSource<Customer>(customers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      });
    }

    
  openAddContactDialog(): void {

    let dialogRef = this.dialog.open(AddcustomerComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      if (result) {
        this.openSnackBar("customer added", "New")
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

  onEdit(id){
   
    this.customerService.getCustomer(id).subscribe(customer => {
     this.existingcustomer = customer;
      let dialogRef = this.dialog.open(EditcustomerComponent, {
        width: '450px',
        data: {
          customer: this.existingcustomer,
          tag:"angular"
        }
      });
      this.refreshTable();
  });

  }

  onDelete($key){
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.customerService.deleteCustomer($key).subscribe( resp =>{
         // this.refreshTable();
          this.ngOnInit();
          this.notificationService.warn('Deleted successfully');
        }
      );
     }
    });
  }

 
  private refreshTable() {
    this.dataSource.paginator = this.paginator;
}




}
