import { Component, OnInit } from '@angular/core';
import { Message } from '../model/message';
import { MessageService } from '../service/message.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {


  message : Message  = {"name":"kAqeGB8wjp@gmail.com" ,"email":"kAqeGB8wjp@gmail.com","subject":"kAqeGB8wj" ,"message":"secret"};
 
  constructor(private messageService : MessageService, private notificationService: NotificationService,) { }

  ngOnInit() {
  }



  saveComments(message : Message){

    this.messageService.saveComments(message).subscribe(resp => {
      this.notificationService.success('We will contact you shortly');
    });
  
  
  }

}
