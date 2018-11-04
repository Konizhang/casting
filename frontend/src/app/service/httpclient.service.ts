import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable()
export class HttpclientService {

  constructor(private http: HttpClient) {}

  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append('Authorization', "bearer " + localStorage.getItem('auth_token')); 
  }


  // get(url) {
  //   let headers = new Headers();
  //   this.createAuthorizationHeader(headers);
  //   return this.http.get<T>(url, {headers: headers });
  // }

  // post(url, data) {
  //   let headers = new Headers();
  //   this.createAuthorizationHeader(headers);
  //   return this.http.post<T>(url, data, {headers: headers});
  // }

}
