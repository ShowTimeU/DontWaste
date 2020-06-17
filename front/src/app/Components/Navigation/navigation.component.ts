import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {MatDialog} from '@angular/material/dialog';
import {LoginPageComponent} from '../User Components/Login Page/login-page.component';
import {UserHttpService} from '../../Services/user-http.service';
import {User} from '../../Models/user';
import {Subscription} from 'rxjs';
import {Router} from "@angular/router";
import {MessengerService} from "../../Services/messenger.service";
import {CartService} from "../../Services/cart.service";
import {ShoppingCartComponent} from "../Product Components/Shopping Cart/shopping-cart.component";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit{

  btn = true;
  reason = '';
  @ViewChild('sidenav') sidenav: MatSidenav;
  currentUser: User;
  currentUserSubscription: Subscription;
  counterSubscription: Subscription;
  counter: any;

  constructor(public dialog: MatDialog,
              private http: UserHttpService,
              private router: Router,
              private cartService: CartService,
              private msg: MessengerService) {
    this.counterSubscription = this.msg.getNumber().subscribe(data => {
    this.counter = data.counter;
    });
  }

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
    this.btn = true;
    window.location.reload();
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  openCart() {
    this.dialog.open(ShoppingCartComponent, {
      width: '600px',
      minHeight: '400px'
    })
  }
}
