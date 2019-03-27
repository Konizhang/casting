import { Customer } from 'src/app/model/customer';
import { Component, OnInit, Inject } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.scss']
})
export class EditcustomerComponent implements OnInit {

  customer : Customer;



  constructor(
    private customerService : CustomerService,

    private dialogRef: MatDialogRef<EditcustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private router:ActivatedRoute
    ) { }


    name = new FormControl('', [Validators.required]);

    getErrorMessage() {
      return this.name.hasError('required') ? 'You must enter a name' : '';
    }
  


  ngOnInit( ) {

     this.customer = this.data.customer;
    
  
   }
  dismiss() {
    this.dialogRef.close(null);
  }


  save() {
  
    this.customerService.updateCustomer(this.customer.id,this.customer).subscribe(customer => {
       this.dialogRef.close(customer);
   });
}


}
