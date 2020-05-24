import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductHTTPService} from "../services/product-http.service";
import {Product} from "../model/product";
import {Subscription} from "rxjs";
import {UserHttpService} from "../services/user-http.service";
import {AuthenticationService} from "../services/authentication.service";
import {User} from "../model/user";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit, OnDestroy {

  currentUserSubscription: Subscription;
  currentUser: User;
  public products: Product[] = [];

  constructor(private productHTTPService: ProductHTTPService,
              private authenticationService: AuthenticationService,
              private userService: UserHttpService) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    return this.productHTTPService.getAllProducts().subscribe(data => this.products = data);
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }
}
