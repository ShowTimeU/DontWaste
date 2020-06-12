import {Component, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {Subscription} from "rxjs";
import {UserHttpService} from "../../services/user-http.service";
import {UtilService} from "../../services/util.service";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";
import {NavigationComponent} from "../../navigation/navigation.component";
import {Button} from "@material-ui/core";


@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @Output() checkIn;
  returnUrl: string;

  emailFC = new FormControl('',
    [Validators.required]);
  passwordFC = new FormControl('',
    [Validators.required]);

  formGroup = new FormGroup( {
    email: this.emailFC,
    password: this.passwordFC
  });
  signIn = true;



  constructor(public dialog: MatDialog,
              private http: UserHttpService,
              private util: UtilService,
              private router: Router,
              private route: ActivatedRoute) {

    if (this.http.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    } else {
      this.http.getUserByEmail(this.emailFC.value, this.passwordFC.value).pipe(
        first()).subscribe(data => {
          this.router.navigate(['/']);
          this.dialog.closeAll();
          window.location.reload();
        },
        error => {
          error = this.util.snack('Wrong Login Or Password!');
        });
    }
  }

  getLoginError() {
    return this.util.getRequiredPatternError(this.emailFC, 'empty login', 'not valid email');
  }

  getPasswordError() {
    return this.util.getRequiredPatternError(this.passwordFC, 'empty password', 'not valid password');
  }


}
