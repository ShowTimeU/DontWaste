import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductHTTPService} from "../../services/product-http.service";
import {MessengerService} from "../../services/messenger.service";
import {CartService} from "../../services/cart.service";
import {disableDebugTools} from "@angular/platform-browser";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;


  constructor(private productHTTPService: ProductHTTPService,
              private msg: MessengerService,
              private cartService: CartService) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.productItem.quantity--;
      this.msg.sendMsg(this.productItem);
    })
  }

}
