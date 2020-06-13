import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProductRegistrationComponent} from "../productRegistration/product-registration.component";
import {CartService} from "../../services/cart.service";
import {User} from "../../model/user";
import {UserHttpService} from "../../services/user-http.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'main-product-page',
  templateUrl: './main-product-page.component.html',
  styleUrls: ['./main-product-page.component.css']
})
export class MainProductPageComponent implements OnInit{

  cartProductList = [];

  constructor(public dialog: MatDialog,
              private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  removeProduct(product) {
    this.cartService.removeProductsFromCart(product).subscribe(() => {
      this.cartProductList.shift();
    })
  }

  openDialog() {
    this.dialog.open(ProductRegistrationComponent, {
      width: '400px'
    });
  }


}
