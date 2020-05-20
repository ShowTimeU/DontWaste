import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule} from '@angular/material/slider';
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
import {RouterModule, Routes} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FoodListComponent} from './food-list/food-list.component';
import {DescriptionComponent} from './description/description.component';
import {NavigationComponent} from './navigation/navigation.component';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {PersonalAreaComponent} from './personal-area/personal-area.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from '@angular/common/http';
import {MatGridListModule} from "@angular/material/grid-list";

const routes = [{path: 'registrationPage', component: RegistrationPageComponent},
                {path: '', component: WelcomePageComponent},
                {path: 'loginPage', component: LoginPageComponent},
                {path: 'foodlistPage', component: FoodListComponent},
                {path: 'personalAreaPage', component: PersonalAreaComponent}];

const parentModules: Routes = [
          {path: 'foodlistPage/descriptionPage', component: DescriptionComponent}];

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    FoodListComponent,
    DescriptionComponent,
    NavigationComponent,
    PersonalAreaComponent,
    ProductComponent
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
    RouterModule.forChild(parentModules),
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
