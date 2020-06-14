import {Component, Inject, OnInit} from '@angular/core';
import {Product} from "../../../Models/product";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Router} from '@angular/router';
import {UserHttpService} from "../../../Services/user-http.service";
import {LoginPageComponent} from "../../User Components/Login Page/login-page.component";
import {CartService} from "../../../Services/cart.service";

@Component({
  selector: 'app-checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.css']
})
export class CheckoutDialogComponent implements OnInit {
  objectKeys = Object.keys;
  res: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Product,
              private router: Router,
              private dialog: MatDialog,
              private userHttpService: UserHttpService,
              private cartService: CartService) { }

  ngOnInit(): void {
  }

  onClick() {
    if(!this.userHttpService.currentUserValue) {
      alert('Please Sign In first!');
      this.dialog.open(LoginPageComponent, {
        width: '400px'
      });
    } else {
      this.router.navigateByUrl('/payPage');
      this.dialog.closeAll();
      this.cartService.removeAllProductsFromCart();
    }
  }

}

