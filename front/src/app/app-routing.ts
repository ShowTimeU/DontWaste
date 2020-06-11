import {Routes} from "@angular/router";
import {paths} from "./app-paths";
import {WelcomePageComponent} from "./welcomePage/welcome-page.component";
import {MainProductPageComponent} from "./productComponents/mainProductPage/main-product-page.component";
import {PersonalAreaComponent} from "./userComponents/personalArea/personal-area.component";
import {RegistrationPageComponent} from "./userComponents/registrationPage/registration-page.component";
import {NotFoundComponent} from "./notFound/not-found.component";
import {PathResolveService} from "./services/path-resolve.service";

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
