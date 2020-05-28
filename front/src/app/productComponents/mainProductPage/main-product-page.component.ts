import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProductRegistrationComponent} from "../productRegistration/product-registration.component";
import {Product} from "../../model/product";


@Component({
  selector: 'main-product-page',
  templateUrl: './main-product-page.component.html',
  styleUrls: ['./main-product-page.component.css']
})
export class MainProductPageComponent implements OnInit{

  cartProductList = [];
  productList: Product[];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addProductToCart(product) {
    const productExistInCart = this.cartProductList.find(({productName}) => productName === product.productName);
    if (!productExistInCart) {
      this.cartProductList.push({...product, num:1});
      return;
    }
    productExistInCart.num += 1;
  }

  removeProduct(product) {
    this.cartProductList = this.cartProductList.filter(({productName}) => productName !== product.productName)
  }

  openDialog() {
    this.dialog.open(ProductRegistrationComponent, {
      width: '400px'
    });
  }


}
