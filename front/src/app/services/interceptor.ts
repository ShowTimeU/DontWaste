import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserHttpService} from "./user-http.service";


@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private http: UserHttpService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to the api url
    const currentUser = this.http.currentUserValue;
    const isLoggedIn = currentUser && currentUser.secToken;
    const isApiUrl = request.url.startsWith('localhost:8080/api/');
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `${currentUser.secToken}`,
        }
      });
    }

    return next.handle(request);
  }
}
