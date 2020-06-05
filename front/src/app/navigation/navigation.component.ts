import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {MatDialog} from '@angular/material/dialog';
import {LoginPageComponent} from '../userComponents/loginPage/login-page.component';
import {ShoppingCartComponent} from "../productComponents/shoppingCart/shopping-cart.component";
import {CheckoutDialogComponent} from "../productComponents/checkoutDialog/checkout-dialog.component";


@Component({
  selector: 'navigation',
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

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(LoginPageComponent, {
      width: '400px'
    });
  }

  openCart() {
  }
}
