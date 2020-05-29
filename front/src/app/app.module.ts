import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginPageComponent } from './userComponents/loginPage/login-page.component';
import { RegistrationPageComponent } from './userComponents/registrationPage/registration-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {RouterModule} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MainProductPageComponent} from './productComponents/mainProductPage/main-product-page.component';
import {NavigationComponent} from './navigation/navigation.component';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {PersonalAreaComponent} from './userComponents/personalArea/personal-area.component';
import {HttpClientModule} from '@angular/common/http';
import {MatChipsModule} from "@angular/material/chips";
import { ShoppingCartComponent } from './productComponents/shoppingCart/shopping-cart.component';
import { CartProductComponent } from './productComponents/shoppingCartProduct/cart-product.component';
import { ProductViewComponent } from './productComponents/productView/product-view.component';
import { ProductListComponent } from './productComponents/productList/product-list.component';
import {MatTableModule} from "@angular/material/table";
import {ProductRegistrationComponent} from "./productComponents/productRegistration/product-registration.component";
import { CheckoutDialogComponent } from './productComponents/checkoutDialog/checkout-dialog.component';
import { PayPageComponent } from './payPage/pay-page.component';

const routes = [{path: 'registrationPage', component: RegistrationPageComponent},
                {path: '', component: WelcomePageComponent},
                {path: 'loginPage', component: LoginPageComponent},
                {path: 'mainProductPage', component: MainProductPageComponent},
                {path: 'personalAreaPage', component: PersonalAreaComponent},
                {path: 'payPage', component: PayPageComponent},];


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
    CartProductComponent,
    ProductViewComponent,
    ProductListComponent,
    CheckoutDialogComponent,
    PayPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    RouterModule.forRoot(routes),
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
