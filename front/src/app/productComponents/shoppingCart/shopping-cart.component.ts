import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../model/product";
import {MessengerService} from "../../services/messenger.service";
import {CheckoutDialogComponent} from "../checkoutDialog/checkout-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../model/cartItem";

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

  @Input() cartItems = [];
  @Output() productRemoved = new EventEmitter();

  constructor(private msg: MessengerService,
              private dialog: MatDialog,
              private cartService: CartService) { }

  ngOnInit() {
      this.handleSubscription();
      this.loadCartItems();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe( (items: CartItem[]) => {
      this.cartItems = items;
      this.calcTotalPrice();
    })
  }

  removeProduct(product) {
    this.cartService.removeProductsFromCart(product).subscribe(() => {
      this.loadCartItems();
    })
  }

  calcTotalPrice() {
    return this.cartItems.reduce((acc, prod) => acc+= (prod.price * prod.quantity) ,0);
  }

  checkout() {
    this.dialog.open(CheckoutDialogComponent, {
      width: '500px',
      data: {productName: this.cartItems.map(value => value = value.productName),
        totalPrice: this.calcTotalPrice(),
        price: this.cartItems.map(value => String('₪' + value.price*value.quantity)),
        quantity: this.cartItems.map(value => String(value = value.quantity + ' pcs.'))}
    })
  }

  calcTotal() {
    return this.cartItems.reduce((acc, prod) => acc+= prod.quantity ,0);
  }
}
