import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CheckoutDialogComponent} from "../checkoutDialog/checkout-dialog.component";
import {ActivatedRoute} from "@angular/router";
import {ProductHTTPService} from "../../services/product-http.service";
import {Product} from "../../model/product";

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{


  products: Product[];

  constructor(private dialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private productHTTPService: ProductHTTPService) {
  }

  ngOnInit() {
  }

  displayedColumns: string[] = ['name', 'price', 'quantity', 'cancel'];

  // calcTotal() {
  //   return this.products.reduce((acc, prod) => acc+= prod.num ,0);
  // }
  //
  // removeProduct(product) {
  //   this.productRemoved.emit(product);
  // }
  //
  // calcTotalPrice() {
  //   return this.products.reduce((acc, prod) => acc+= (prod.price * prod.num) ,0);
  // }
  //
  // checkout() {
  //   this.dialog.open(CheckoutDialogComponent, {
  //     width: '500px',
  //     data: {productName: this.products.map(value => value = value.productName),
  //            totalPrice: this.calcTotalPrice(),
  //            price: this.products.map(value => String(value.price*value.num + '₪')),
  //            quantity: this.products.map(value => String(value = value.num + ' pcs.'))}
  //   })
  // }

}
