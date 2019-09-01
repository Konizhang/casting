import { Item } from './../model/item';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './BaseService';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ItemService extends BaseService{

  endpoint : string = "items";

  size = 10;

  url : string = "";

 constructor(private http: HttpClient) {
      super();
      this.http = http;
  }

  form: FormGroup = new FormGroup({
    $id: new FormControl(null),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.email),
    brand_id: new FormControl('', [Validators.required, Validators.minLength(8)]),
    category_id: new FormControl(''),
    weight: new FormControl('1'),
    material: new FormControl(0),


  });

  initializeFormGroup() {
    this.form.setValue({
      $id: null,
      name: '',
      description: '',
      brand_id: '',
      category_id: '',

      weight: 0,
      material: '',
    });
  }

  populateForm(item) {
    this.form.setValue(item);
  }

  getItem(id: number) {
   return  this.http.get<Item>(this.base_url+'/'+this.endpoint+'/'+id);
  }

  getItems() {
   this.url = this.base_url + '/' + this.endpoint;
      return  this.http.get<any>(this.url).pipe(
        map(res => res.data)
    );
  }

  deleteIteme(id: number) {
   return  this.http.delete<Item>(this.base_url+'/'+this.endpoint+'/'+id);
  }

  addItem(item: Item){
    return  this.http.post<Item>(this.base_url+'/'+this.endpoint,item);
  }

  getItemsby($id,$type,$page){
    this.url = this.base_url+'/itemsBy/'+$type+'/'+$id+'?page='+$page;
    console.log( this.url);
    return  this.http.get<any>(this.url)
  //  .pipe(
  //    map(res => res.data) // or any other operator
  //  );
   }


   updateIteme(id:number,item:Item){
     return  this.http.put<Item>(this.base_url+'/'+this.endpoint+'/'+id,item);
   }

}
