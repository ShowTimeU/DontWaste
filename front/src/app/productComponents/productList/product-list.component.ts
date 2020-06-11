import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Product} from "../../model/product";
import {ProductHTTPService} from "../../services/product-http.service";
import {Observable} from "rxjs";


interface Area {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  selectedValue: string;
  areas: Area[] = [
    {value: 'All', viewValue: 'All Districts'},
    {value: 'Jerusalem', viewValue: 'Jerusalem District'},
    {value: 'North', viewValue: 'Northern District'},
    {value: 'Haifa', viewValue: 'Haifa District'},
    {value: 'Centre', viewValue: 'Central District'},
    {value: 'Tel Aviv', viewValue: 'Tel Aviv District'},
    {value: 'South', viewValue: 'Southern District'},
    {value: 'Judea and Samaria Area', viewValue: 'Judea and Samaria Area'}
  ];
  public products: Product[];

  constructor(private productHTTPService: ProductHTTPService) {
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    return this.productHTTPService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  getProductsByArea() {
    return this.productHTTPService.getProductsByArea(this.selectedValue).subscribe(data => this.products = data);
  }


  onArea() {
    if (this.selectedValue == 'All') {
      return this.getAllProducts();
    }
    return this.getProductsByArea();
  }

}
