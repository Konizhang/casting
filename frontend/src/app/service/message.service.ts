import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './BaseService';
import { Message } from '../model/message';




@Injectable({
  providedIn: 'root'
})
export class MessageService extends BaseService {

  endpoint : string = "messages";


  constructor(private http: HttpClient) {
    super();
    this.http = http;
}

saveComments(message:Message){
  return  this.http.post<Message>(this.base_url+'/'+this.endpoint,message);
}

}
