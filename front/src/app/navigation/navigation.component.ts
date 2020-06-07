import {Component, HostBinding, Output, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {MatDialog} from '@angular/material/dialog';
import {LoginPageComponent} from '../userComponents/loginPage/login-page.component';
import {UserHttpService} from "../services/user-http.service";
import {Router} from "@angular/router";
import {UtilService} from "../services/util.service";



@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {

  reason = '';
  @ViewChild('sidenav') sidenav: MatSidenav;
  checkIn = true;


  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  constructor(public dialog: MatDialog,
              private http: UserHttpService,
              private router: Router,
              private util: UtilService) {
  }


  signIn() {
    this.dialog.open(LoginPageComponent, {
      width: '400px'
    });
    this.checkIn = false;
  }

  logOut() {
    this.http.logout();
    this.router.navigate(['/']);
    this.checkIn = true;
    window.location.reload();
  }

}

