import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './model/product';
import {User} from "./model/user";

@Injectable({
  providedIn: 'root'
})
export class ProductHTTPService {

  constructor(private httpClient: HttpClient) { }

  createProduct(body): Observable<Product> {
    return this.httpClient.post<Product>('/api/createProduct', body);
  }

  createUser(body): Observable<User> {
    return this.httpClient.post<User>('/api/createUser', body);
  }
}
