import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Product} from "../model/product";
import {ProductHTTPService} from "../product-http.service";
import {MatDialog} from "@angular/material/dialog";
import {ProductComponent} from "../product/product.component";
import {MatPaginator} from "@angular/material/paginator";
import {Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit{

  public products: Product[] = [];

  constructor(private productHTTPService: ProductHTTPService, public dialog: MatDialog) {  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    return this.productHTTPService.getAllProducts().subscribe(data => this.products = data );
  }

  openDialog() {
    this.dialog.open(ProductComponent, {
      width: '400px'
    });
  }
}
