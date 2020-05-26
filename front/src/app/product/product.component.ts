import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../model/product';
import {ProductHTTPService} from '../services/product-http.service';

interface Area {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  formGroup: FormGroup;
  createdProduct: Product;
  id: number;
  selectedValue: string;
  areas: Area[] = [
    {value: 'Jerusalem', viewValue: 'Jerusalem District'},
    {value: 'North', viewValue: 'Northern District'},
    {value: 'Haifa', viewValue: 'Haifa District'},
    {value: 'Centre', viewValue: 'Central District'},
    {value: 'Tel Aviv', viewValue: 'Tel Aviv District'},
    {value: 'South', viewValue: 'Southern District'},
    {value: 'Judea and Samaria Area', viewValue: 'Judea and Samaria Area'}
  ];

  constructor(private fb: FormBuilder,
              private productHTTPService: ProductHTTPService
              ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formGroup = this.fb.group( {
      productName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      startingPrice: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required),
      institution: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    const controls = this.formGroup.controls;

    if (this.formGroup.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }

    this.productHTTPService.createProduct(this.formGroup.value).subscribe(data => {
      this.createdProduct = data;
      window.location.reload();
    });

  }
}
