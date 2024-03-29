import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { FormControl, Validators } from '@angular/forms';

import { User } from '../../model/user';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  avatars = [
    'svg-1', 'svg-2', 'svg-3', 'svg-4'
  ];

  user: User;
  constructor(
    private dialogRef: MatDialogRef<NewContactDialogComponent>,
    ) { }

  name = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }

  ngOnInit() {
 //   this.user = new User();
  }

  save() {
    // this.userService.addUser(this.user).then(user => {
    //   this.dialogRef.close(user);
    // });
  }

  dismiss() {
    this.dialogRef.close(null);
  }

}
