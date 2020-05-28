import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() products: any[];
  @Output() productAdded = new EventEmitter();

  addProductToCart(product) {
    this.productAdded.emit(product);
  }
}
