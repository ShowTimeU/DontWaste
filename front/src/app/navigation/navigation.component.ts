import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {MatDialog} from '@angular/material/dialog';
import {LoginPageComponent} from '../userComponents/loginPage/login-page.component';
import {UserHttpService} from '../services/user-http.service';
import {User} from '../model/user';
import {Subscription} from 'rxjs';
import {Router} from "@angular/router";
import {ShoppingCartComponent} from "../productComponents/shoppingCart/shopping-cart.component";
import {MatAccordion} from "@angular/material/expansion";
import {MessengerService} from "../services/messenger.service";
import {CartService} from "../services/cart.service";
import {Product} from "../model/product";


@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit{

  btn = true;
  reason = '';
  @ViewChild('sidenav') sidenav: MatSidenav;
  currentUser: User;
  currentUserSubscription: Subscription;
  counting: any;



  constructor(public dialog: MatDialog,
              private http: UserHttpService,
              private router: Router,
              private cartService: CartService,
              private msg: MessengerService) { }

  ngOnInit() {
    this.userSubs();
  }

  userSubs() {
    this.currentUserSubscription = this.http.currentUser.subscribe(user => {
      this.currentUser = user;
      if(this.currentUser) {
        return this.btn = false;
      }
      });
    return true;
  }

  signIn() {
    this.dialog.open(LoginPageComponent, {
      width: '400px'
    });
  }

  logOut() {
    this.http.logout();
    window.location.reload();
    this.btn = true;
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

}
