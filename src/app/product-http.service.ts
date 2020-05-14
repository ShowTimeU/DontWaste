import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductHTTPService {

  constructor(private httpClient: HttpClient) { }

  createProduct(body): Observable<Product> {
    return this.httpClient.post<Product>('/api/createProduct', body);
  }
}
