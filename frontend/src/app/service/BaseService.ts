import { Http, Headers } from  "@angular/http";
import * as _ from 'lodash';
export class BaseService {

   base_url : string = "http://local.casting.com/api";
   domain_url : string = "http://local.casting.com";
   currentUser : number  = 15;
   constructor() { }

   _registerUrl = "http://local.casting.com/api/signup";
   _loginUrl =    "http://local.casting.com/api/login";




}
