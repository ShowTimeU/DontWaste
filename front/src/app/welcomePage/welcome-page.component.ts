import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductHTTPService} from "../services/product-http.service";
import {Product} from "../model/product";
import {Router} from "@angular/router";
import {User} from "../model/user";
import {UserHttpService} from "../services/user-http.service";


@Component({
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  currentUser: User;
  public products: Product[] = [];

  constructor(private productHTTPService: ProductHTTPService,
              private userHttpService: UserHttpService) {
    this.userHttpService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.placeCss();
    this.getAllProducts();
  }

  getAllProducts() {
    return this.productHTTPService.getAllProducts().subscribe(data => this.products = data);
  }

  placeCss() {
    document.getElementById("filters").hidden = true;
    document.getElementById('mainList').style.backgroundColor = '#e6f5f2';
  }

}
