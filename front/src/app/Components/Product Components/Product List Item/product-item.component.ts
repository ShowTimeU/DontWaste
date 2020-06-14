import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../Models/product";
import {ProductHTTPService} from "../../../Services/product-http.service";
import {MessengerService} from "../../../Services/messenger.service";
import {CartService} from "../../../Services/cart.service";
import {UserHttpService} from "../../../Services/user-http.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;

  constructor(private productHTTPService: ProductHTTPService,
              private msg: MessengerService,
              private cartService: CartService,
              private userHttpService: UserHttpService) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem);
      })
  }

}
