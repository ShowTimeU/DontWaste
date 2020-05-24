import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductHTTPService} from "../services/product-http.service";
import {MatDialog} from "@angular/material/dialog";
import {ProductComponent} from "../product/product.component";
import {ActivatedRoute, Router} from "@angular/router";

interface Area {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit{

  public products: Product[] = [];
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

  constructor(private productHTTPService: ProductHTTPService,
              public dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    return this.productHTTPService.getAllProducts().subscribe(data => this.products = data);
  }

  getProductsByArea() {
    return this.productHTTPService.getProductsByArea(this.selectedValue).subscribe(data => this.products = data);
  }

  openDialog() {
    this.dialog.open(ProductComponent, {
      width: '400px'
    });
  }

  onArea() {
    if (this.selectedValue == 'All') {
      return this.getAllProducts();
    }
    return this.getProductsByArea();
  }

}
