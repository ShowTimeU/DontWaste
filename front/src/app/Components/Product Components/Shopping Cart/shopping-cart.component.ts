import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../Models/product";
import {MessengerService} from "../../../Services/messenger.service";
import {CheckoutDialogComponent} from "../Checkout Dialog Page/checkout-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {CartService} from "../../../Services/cart.service";
import {CartItem} from "../../../Models/cart-item";
import {UserHttpService} from "../../../Services/user-http.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

  @Input() cartItems = [];
  @Output() productRemoved = new EventEmitter();
  count = 0;

  constructor(private msg: MessengerService,
              private dialog: MatDialog,
              private cartService: CartService,
              private http: UserHttpService) {
  }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  loadCartItems() {
    if(this.http.currentUserValue) {
      this.cartService.getCartItems().subscribe( (items: CartItem[]) => {
        this.cartItems = items;
        this.calcTotalPrice();
      })
    }
  }

  removeProduct(product) {
    this.cartService.removeProductsFromCart(product).subscribe(() => {
      this.loadCartItems()
      this.count = this.calcTotal()-2;
      this.msg.sendNumber((this.count));
    })
  }

  calcTotalPrice() {
    return this.cartItems.reduce((acc, prod) => acc+= (prod.price * prod.quantity) ,1);
  }

  checkout() {
    this.dialog.open(CheckoutDialogComponent, {
      width: '500px',
      data: {productName: this.cartItems.map(value => value = value.productName),
        totalPrice: this.calcTotalPrice(),
        price: this.cartItems.map(value => Number(value.price*value.quantity)),
        quantity: this.cartItems.map(value => String(value = value.quantity + ' pcs.'))}
    })
  }

  calcTotal() {
    return this.cartItems.reduce((acc, prod) => acc+= prod.quantity,1);
  }

  handleSubscription(): any {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
      this.count = this.calcTotal();
      this.msg.sendNumber(this.count);
      return this.count;
    })
  }

}
