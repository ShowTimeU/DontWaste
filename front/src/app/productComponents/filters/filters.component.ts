import {Component, Input, OnInit} from '@angular/core';
import {ProductHTTPService} from "../../services/product-http.service";
import {Product} from "../../model/product";

interface Area {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  productList: Product[] = [];
  @Input() selectedValue: string;
  searchText: '';
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


  constructor(private productHTTPService: ProductHTTPService) { }

  ngOnInit(): void {
  }

  getAllProducts() {
    return this.productHTTPService.getAllProducts().subscribe(data => this.productList = data);
  }

  getProductsByArea() {
    return this.productHTTPService.getProductsByArea(this.selectedValue).subscribe(data => this.productList = data);
  }

  onArea() {
    if (this.selectedValue == 'All') {
      return this.getAllProducts();
    }
    return this.getProductsByArea();
  }
}
