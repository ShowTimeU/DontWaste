import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  @Input() products: any[];
  @Output() productRemoved = new EventEmitter();

  constructor() {
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

}
