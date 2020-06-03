import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {ProductHTTPService} from "../../services/product-http.service";
import {MatDialog} from "@angular/material/dialog";
import {Product} from "../../model/product";
import {DomSanitizer} from "@angular/platform-browser";
import {animate, state, style, transition, trigger} from "@angular/animations";

interface Area {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  @Input() product: any;
  @Output() productAdded = new EventEmitter();
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
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    return this.productHTTPService.getAllProducts().subscribe(data => this.products = data);
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

  addProductToCart(product: Product) {
    this.productAdded.emit(product);
  }

  flip: string = 'inactive';
  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }
}
