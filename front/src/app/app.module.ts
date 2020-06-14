import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './Components/Welcome Page/welcome-page.component';
import { LoginPageComponent } from './Components/User Components/Login Page/login-page.component';
import { RegistrationPageComponent } from './Components/User Components/Registration Page/registration-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import { MainProductPageComponent} from './Components/Product Components/Main Product Page/main-product-page.component';
import { NavigationComponent} from './Components/Navigation/navigation.component';
import { PersonalAreaComponent} from './Components/User Components/Personal Area/personal-area.component';
import { HttpClientModule} from '@angular/common/http';
import { ShoppingCartComponent } from './Components/Product Components/Shopping Cart/shopping-cart.component';
import { ProductListComponent } from './Components/Product Components/Product List/product-list.component';
import { ProductRegistrationComponent} from "./Components/Product Components/Product Registration Page/product-registration.component";
import { CheckoutDialogComponent } from './Components/Product Components/Checkout Dialog Page/checkout-dialog.component';
import { PayPageComponent } from './Components/Pay Page/pay-page.component';
import { UtilService} from "./Services/util.service";
import { AlertService} from "./Services/alert.service";
import { MessengerService} from "./Services/messenger.service";
import { ProductHTTPService} from "./Services/product-http.service";
import { UserHttpService} from "./Services/user-http.service";
import { NotFoundComponent } from './Components/Not Found Page/not-found.component';
import { PathResolveService} from "./Services/path-resolve.service";
import { FilterPipe } from './Pipes/filter.pipe';
import { ProductItemComponent} from "./Components/Product Components/Product List Item/product-item.component";
import { CartItemComponent} from "./Components/Product Components/Shopping Cart Item/cart-item.component";
import { ShoppingCartModule} from "ng-shopping-cart";
import { LengthOfArrayPipe } from './Pipes/length-of-array.pipe';
import { MatDesignModule } from "./mat-design.module";



const routes = [{path: 'registrationPage', component: RegistrationPageComponent},
  {path: '', component: WelcomePageComponent},
  {path: 'loginPage', component: LoginPageComponent},
  {path: 'mainProductPage', component: MainProductPageComponent},
  {path: 'personalAreaPage', component: PersonalAreaComponent},
  {path: 'payPage', component: PayPageComponent}];


@NgModule({
    declarations: [
        AppComponent,
        WelcomePageComponent,
        LoginPageComponent,
        RegistrationPageComponent,
        MainProductPageComponent,
        NavigationComponent,
        PersonalAreaComponent,
        ProductRegistrationComponent,
        ShoppingCartComponent,
        ProductListComponent,
        CheckoutDialogComponent,
        PayPageComponent,
        NotFoundComponent,
        FilterPipe,
        ProductItemComponent,
        ProductItemComponent,
        CartItemComponent,
        LengthOfArrayPipe,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true}),
    HttpClientModule,
    ReactiveFormsModule,
    ShoppingCartModule,
    MatDesignModule
  ],
    providers: [AlertService,
      ProductHTTPService,
      UserHttpService,
      UtilService,
      LoginPageComponent,
      PathResolveService,
      MessengerService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
