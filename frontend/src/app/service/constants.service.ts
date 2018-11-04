
import { Injectable } from '@angular/core';
import { BaseService } from './BaseService';
import { Brand } from '../model/brand';
import { Category } from '../model/category';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
@Injectable({
  providedIn: 'root'
})
export class ConstantsService   extends BaseService{

  endpoint : string = "";
 

  constructor(private http: HttpClient) {
    super();
    this.http = http;
}
  getCategories(){ 
    return this.http.get<Category[]>(this.base_url+'/categories');
   }

   getBrands(){ 
    return  this.http.get<Brand[]>(this.base_url+'/brands');
   } 

   getObjectName($array,$key) {
    console.log($array);
    console.log($key);
    if ($key == "0")
      return "";
    else{
      return  _.find($array, (obj) => { return obj.id == $key; }) ['name'];
     }
  }
}
