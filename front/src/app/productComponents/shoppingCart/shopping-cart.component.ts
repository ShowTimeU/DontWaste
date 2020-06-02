import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CheckoutDialogComponent} from "../checkoutDialog/checkout-dialog.component";

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  @Input() products: any[];
  @Output() productRemoved = new EventEmitter();

  constructor(private dialog: MatDialog) {
  }

  calcTotal() {
    return this.products.reduce((acc, prod) => acc+= prod.num ,0);
  }

  removeProduct(product) {
    this.productRemoved.emit(product);
  }

  calcTotalPrice() {
    return this.products.reduce((acc, prod) => acc+= (prod.price * prod.num) ,0);
  }

  checkout() {
    this.dialog.open(CheckoutDialogComponent, {
      minHeight: '500px',
      width: '500px',
      data: {productName: this.products.map(value => value = value.productName),
             totalPrice: this.calcTotalPrice(),
             price: this.products.map(value => String(value.price*value.num + '₪')),
             quantity: this.products.map(value => String(value = value.num + ' pcs.'))}
    })
  }
}
