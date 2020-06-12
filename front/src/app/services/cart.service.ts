import { Injectable } from '@angular/core';
import {CartItem} from "../model/cartItem";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(private httpClient: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    return this.httpClient.get<CartItem[]>('http://localhost:3000/cartList').pipe(
      map((res:any[]) => {
        let cartItems: CartItem[] = [];

        for(let item of res) {
          let productExists = false;

          for(let i in cartItems) {
            if(cartItems[i].productId === item.product.id) {
              cartItems[i].quantity++;
              productExists = true;
              break;
            }
          }
          if (!productExists) {
            cartItems.push(new CartItem(item.id, item.product));
          }
        }
        return cartItems;
      })
    )
  }

  addProductToCart(product: Product): Observable<any> {
    return this.httpClient.post<any>('http://localhost:3000/cartList', {product});
  }

  removeProductsFromCart(product: Product) {
    return this.httpClient.delete('http://localhost:3000/cartList'+ '/' + product.id);
  }

}
