import {Product} from "./product";

export class CartItem {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
  price: number;


  constructor(id: number, product: Product, quantity = 1) {
    this.id = id;
    this.productId = product.id;
    this.productName = product.productName;
    this.quantity = quantity;
    this.price = product.price;
  }

}



