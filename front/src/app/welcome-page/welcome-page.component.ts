import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductHTTPService} from "../services/product-http.service";
import {Product} from "../model/product";


@Component({
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  public products: Product[] = [];

  constructor(private productHTTPService: ProductHTTPService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    return this.productHTTPService.getAllProducts().subscribe(data => this.products = data);
  }

}
