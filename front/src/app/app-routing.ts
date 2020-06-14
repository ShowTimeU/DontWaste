import {Routes} from "@angular/router";
import {paths} from "./app-paths";
import {WelcomePageComponent} from "./Components/Welcome Page/welcome-page.component";
import {MainProductPageComponent} from "./Components/Product Components/Main Product Page/main-product-page.component";
import {PersonalAreaComponent} from "./Components/User Components/Personal Area/personal-area.component";
import {RegistrationPageComponent} from "./Components/User Components/Registration Page/registration-page.component";
import {NotFoundComponent} from "./Components/Not Found Page/not-found.component";
import {PathResolveService} from "./Services/path-resolve.service";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: paths.homePage
  },
  {
    path: paths.homePage,
    component: WelcomePageComponent
  },
  {
    path: paths.mainProductPage,
    component: MainProductPageComponent
  },
  {
    path: paths.personalAreaPage,
    component: PersonalAreaComponent
  },
  {
    path: paths.registrationPage,
    component: RegistrationPageComponent
  },
  {
    path: '**',
    resolve: {
      path: PathResolveService
    },
    component: NotFoundComponent
  }
];
