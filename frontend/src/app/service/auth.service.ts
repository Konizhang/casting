import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  private _registerUrl = "http://local.casting.com/api/signup";
  private _loginUrl =    "http://local.casting.com/api/login";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/home'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }


  // signinUser(user: User) {
  //   //curl -i localhost:3721/oauth/token -d "grant_type=password&scope=read&username=koni&password=1234567a" -u mobileclient:twoplugs.com
  //       let urlSearchParams = new URLSearchParams();
  //       urlSearchParams.append('scope', 'read');
  //       urlSearchParams.append('grant_type', 'password');
  //       urlSearchParams.append('clientId', 'mobileclient');
  //       urlSearchParams.append('secret', 'twoplugs.com');
  //       let body = urlSearchParams.toString()

  //       let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
  //           headers.append("Authorization", "Basic " + btoa("mobileclient" + ":" + "twoplugs.com"));
  //       let options =  null
  //       // new RequestOptions( {method: RequestMethod.Post, headers: headers });

  //       return  this.http.post("http://local.casting.com/oauth/token?username=koni&password=1234567c",body,options);

  //        //localStorage.setItem('auth_token', "ad3eb8fc-66a6-4cca-ae8a-c7c60f3ffbb8");
  // }
}
