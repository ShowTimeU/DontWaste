import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductHTTPService} from "../../services/product-http.service";


@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  productList: Product[] = [];
  searchText: '';

  constructor(private productHTTPService: ProductHTTPService) {
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    return this.productHTTPService.getAllProducts().subscribe(data => this.productList = data);
  }


}
