import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {"username":"kAqeGB8wjp@gmail.com" ,"password":"secret"}
  headerfixed:string = "header-fixed";

  id :number ;
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
    this.headerfixed = "header-fixed";
  }

  loginUser () {

    console.log(this.loginUserData);
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.access_token)
        this._router.navigate(['/items'])
      },
      err => console.log(err)
    ) 
  }


}
