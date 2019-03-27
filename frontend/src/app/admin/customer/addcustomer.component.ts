import { Component, OnInit, Inject } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent implements OnInit {
 
  customer : Customer;

  constructor(
    private customerService : CustomerService,
  
    private dialogRef: MatDialogRef<AddcustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data
    ) { }

  name = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }

  ngOnInit( ) {
   this.customer = new Customer();
 
  }

  save() {
    
      this.customerService.addCustomer(this.customer).subscribe(customer => {
         this.dialogRef.close(customer);
     });
  }

  dismiss() {
    this.dialogRef.close(null);
  }


}
