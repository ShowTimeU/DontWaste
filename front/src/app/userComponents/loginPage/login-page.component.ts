import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {Subscription} from "rxjs";
import {UserHttpService} from "../../services/user-http.service";
import {UtilService} from "../../services/util.service";


@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  signIn = true;
  loginSubscription: Subscription;

  loginFC = new FormControl('',
    [Validators.required]);
  passwordFC = new FormControl('',
    [Validators.required]);

  formGroup = new FormGroup( {
    email: this.loginFC,
    password: this.passwordFC
  });


  constructor(public dialog: MatDialog,
              private http: UserHttpService,
              private util: UtilService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    } else {
      this.sendAuthInfo(this.loginFC.value);
    }
  }

  private sendAuthInfo(info) {
    if (this.signIn) {
      this.loginSubscription = this.http.getUserByEmail(info).subscribe(
        (result) => {
          localStorage.setItem('/mainProductPage', (result as any).token);
        },
        (error) => {
          console.log(error);
          this.util.snack('Wrong Login Or Password!');
        }
      );
    }
  }

  getLoginError() {
    return this.util.getRequiredPatternError(this.loginFC, 'empty login', 'not valid email');
  }

  getPasswordError() {
    return this.util.getRequiredPatternError(this.passwordFC, 'empty password', 'not valid password');
  }


}
