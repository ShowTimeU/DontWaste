import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductHTTPService} from "../services/product-http.service";
import {Product} from "../model/product";
import {Router} from "@angular/router";
import {UserHttpService} from "../services/user-http.service";
import {User} from "../model/user";


@Component({
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  currentUser: User;
  public products: Product[] = [];

  constructor(private productHTTPService: ProductHTTPService,
              private userHttpService: UserHttpService,
              private router: Router) {

    this.userHttpService.currentUser.subscribe(x => this.currentUser = x);

  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    return this.productHTTPService.getAllProducts().subscribe(data => this.products = data);
  }

}
