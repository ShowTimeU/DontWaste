import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductHTTPService} from "../product-http.service";
import {MatDialog} from "@angular/material/dialog";
import {ProductComponent} from "../product/product.component";



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

  private sortingProducts: Product[] = [];
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

  constructor(private productHTTPService: ProductHTTPService, public dialog: MatDialog) {  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    return this.productHTTPService.getAllProducts().subscribe(data => this.products = data);
  }

  openDialog() {
    this.dialog.open(ProductComponent, {
      width: '400px'
    });
  }

  onArea() {
    for (let i=0; i <= this.products.length; i++) {
      if (this.products[i].area === this.selectedValue) {
        console.log('siski')
      }
    }
  }
}
