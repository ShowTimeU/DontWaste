import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {MatDialog} from '@angular/material/dialog';
import {LoginPageComponent} from '../login-page/login-page.component';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {

  reason = '';
  @ViewChild('sidenav') sidenav: MatSidenav;

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  constructor(public dialog: MatDialog,
              private authenticationService: AuthenticationService,
              private router: Router) {}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

  openDialog() {
    this.dialog.open(LoginPageComponent, {
      width: '400px'
    });
  }

}
