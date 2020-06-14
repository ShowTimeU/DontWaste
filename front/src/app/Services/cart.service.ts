import {Injectable} from '@angular/core';
import {CartItem} from "../Models/cart-item";
import {HttpClient} from "@angular/common/http";
import {Product} from "../Models/product";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:3000/cartList';

  getCartItems(): Observable<CartItem[]> {

    return this.httpClient.get<CartItem[]>(this.url).pipe(
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
    return this.httpClient.post<any>(this.url, {product});
  }

  removeProductsFromCart(product: Product) {
    return this.httpClient.delete(this.url+ '/' + product.id);
  }

  removeAllProductsFromCart() {
    return this.httpClient.get<CartItem[]>(this.url).subscribe(data => {
     while(data.length != 0) {
       console.log(data);
       data.shift();
     }
      return data;
    });
  }



  //--------------------------------------------LocalStorage---------------------------------------------


  // addProductToCart(product: Product) {
  //   let cartItems: CartItem[] = [];
  //   const a: string | any[] = localStorage.getItem("product") || [];
  //   for(let item of a) {
  //     cartItems.push(new CartItem(item.id, product));
  //   }
  //   return cartItems;
  // }
  //
  // getCartItems(): Product[] {
  //   return JSON.parse(localStorage.getItem("product")) || [];
  // }
  //
  // removeProductsFromCart(product: Product) {
  //   const products: Product[] = JSON.parse(localStorage.getItem("product"));
  //
  //   for (let i = 0; i < products.length; i++) {
  //     if (products[i].id === product.id) {
  //       products.splice(i, 1);
  //       break;
  //     }
  //   }
  //   // ReAdding the products after remove
  //   localStorage.setItem("product", JSON.stringify(products));
  // }

}
