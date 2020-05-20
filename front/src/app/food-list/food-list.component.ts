import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl} from '@angular/forms';
import {Product} from "../model/product";
import {ProductHTTPService} from "../product-http.service";


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit{

  area = new FormControl();
  areaList: string[] = ['Jerusalem', 'North', 'Haifa', 'Centre', 'Tel Aviv', 'South', 'Judea and Samaria Area'];


  public products: Product[] = [];

  constructor(private productHTTPService: ProductHTTPService) {  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    return this.productHTTPService.getAllProducts().subscribe(data => this.products = data);
  }

}
