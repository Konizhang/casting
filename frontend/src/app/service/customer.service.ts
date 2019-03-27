import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './BaseService';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService {

  endpoint : string = "customers";
 
  size = 10;

  url : string = "";

 constructor(private http: HttpClient) {
      super();
      this.http = http;
  }

  form: FormGroup = new FormGroup({
    $id: new FormControl(null),
    companyname: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.email),
    phoneumber: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl(''),
    comments: new FormControl('1'),
    address: new FormControl(0),
    country: new FormControl(0),
  });

  initializeFormGroup() {
    this.form.setValue({
      $id: null,
      companyname: '',
      contact: '',
      phoneumber: '',
      email: '',
      comments: '',
      address: 0,
      country: '',
    });
  }

  populateForm(customer) {
    this.form.setValue(customer);
  }

  getCustomer(id:number){ 
   return  this.http.get<Customer>(this.base_url+'/'+this.endpoint+'/'+id);
  }

  getCustomers(){ 
   this.url = this.base_url+'/'+this.endpoint;
   return  this.http.get<any>(this.url).pipe(
    map(res => res.data)
  );
  }

  deleteCustomer(id:number){ 
    
   return  this.http.delete<Customer>(this.base_url+'/'+this.endpoint+'/'+id);
  }

  addCustomer(customer:Customer){
    return  this.http.post<Customer>(this.base_url+'/'+this.endpoint,customer);
  }



   updateCustomer(id:number,customer:Customer){ 
     return  this.http.put<Customer>(this.base_url+'/'+this.endpoint+'/'+id,customer);
   }
}
