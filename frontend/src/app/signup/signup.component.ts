import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  headerfixed:string = "header-fixed";
 
  registerUserData = {}
  constructor(private _auth: AuthService,private _router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    console.log(this.registerUserData);
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/additem'])
      },
      err => console.log(err)
   )      
  }
}
