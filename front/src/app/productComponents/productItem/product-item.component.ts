import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductHTTPService} from "../../services/product-http.service";
import {MessengerService} from "../../services/messenger.service";
import {CartService} from "../../services/cart.service";
import {disableDebugTools} from "@angular/platform-browser";
import {UserHttpService} from "../../services/user-http.service";



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
    if(this.userHttpService.currentUserValue) {
      this.cartService.addProductToCart(this.productItem).subscribe(() => {
        this.productItem.quantity--;
        this.msg.sendMsg(this.productItem);
      })
    }
  }

}
