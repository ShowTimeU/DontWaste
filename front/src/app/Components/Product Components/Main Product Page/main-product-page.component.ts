import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProductRegistrationComponent} from "../Product Registration Page/product-registration.component";
import {CartService} from "../../../Services/cart.service";
import {UserHttpService} from "../../../Services/user-http.service";

@Component({
  selector: 'app-main-product-page',
  templateUrl: './main-product-page.component.html',
  styleUrls: ['./main-product-page.component.css']
})
export class MainProductPageComponent implements OnInit{

  cartProductList = [];

  constructor(public dialog: MatDialog,
              private cartService: CartService,
              private http: UserHttpService) {
  }

  ngOnInit() {
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
