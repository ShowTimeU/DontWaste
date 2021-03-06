import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../Models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductHTTPService {


  constructor(private httpClient: HttpClient) {
  }

  createProduct(body): Observable<Product> {
    return this.httpClient.post<Product>('/api/createProduct', body);
  }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/api/getAllProducts');
  }

  getProductsByArea(areaName): Observable<Product[]> {
    let params = new HttpParams();
    params = params.set('area', areaName);
    return this.httpClient.get<Product[]>('/api/getProductsByArea', {params: params});
  }

}
