import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  formGroup = new FormGroup( {
    email: new FormControl(''),
    password: new FormControl('')
  });


  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onSubmit() {
    this.dialog.closeAll();
    if (this.formGroup.invalid) {
      return;
    }
  }

}
