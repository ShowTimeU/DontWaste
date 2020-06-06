import {AfterViewInit, Component, HostBinding, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {MatDialog} from '@angular/material/dialog';
import {LoginPageComponent} from '../userComponents/loginPage/login-page.component';
import {ShoppingCartComponent} from "../productComponents/shoppingCart/shopping-cart.component";
import {CheckoutDialogComponent} from "../productComponents/checkoutDialog/checkout-dialog.component";
import {UserHttpService} from "../services/user-http.service";
import {Router} from "@angular/router";
import {datepickerAnimation} from "ngx-bootstrap/datepicker/datepicker-animations";
import {UtilService} from "../services/util.service";
import {style} from "@angular/animations";



@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
  @HostBinding('class.signIn')
  signIn = true;

  reason = '';
  @ViewChild('sidenav') sidenav: MatSidenav;


  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  constructor(public dialog: MatDialog,
              private http: UserHttpService,
              private router: Router,
              private util: UtilService) {}

  openDialog() {
    this.dialog.open(LoginPageComponent, {
      width: '400px'
    });
    let btn = document.querySelector('.button');
    btn.addEventListener('click', this.toggleBtn);
    console.log(btn);
  }

  logOut() {
    this.http.logout();
    this.router.navigate(['/']);
    this.signIn = true;
  }

  toggleBtn() {
    this.signIn = !this.signIn;
    window.location.reload();
  }
}
