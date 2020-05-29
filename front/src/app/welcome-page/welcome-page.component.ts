import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductHTTPService} from "../services/product-http.service";
import {Product} from "../model/product";
import {Router} from "@angular/router";


@Component({
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  public products: Product[] = [];

  constructor(private productHTTPService: ProductHTTPService,
              private router: Router) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    return this.productHTTPService.getAllProducts().subscribe(data => this.products = data);
  }

}
