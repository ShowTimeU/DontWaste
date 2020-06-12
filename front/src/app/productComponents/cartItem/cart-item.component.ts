import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../model/product";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: Product;
  displayedColumns: string[] = ['name', 'price', 'quantity', 'cancel'];
  @Output() productRemoved = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onClick() {
    this.productRemoved.emit(this.cartItem);
  }

  calcPrice() {
    if (this.cartItem.quantity < 1) {
      return this.cartItem.price;
    }
    return this.cartItem.price * this.cartItem.quantity;
  }

}
