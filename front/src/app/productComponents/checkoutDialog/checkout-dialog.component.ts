import {Component, Inject, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ShoppingCartComponent} from "../shoppingCart/shopping-cart.component";
import { Router } from '@angular/router';

@Component({
  selector: 'checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.css']
})
export class CheckoutDialogComponent implements OnInit {
  objectKeys = Object.keys;
  constructor(public dialogRef: MatDialogRef<ShoppingCartComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Product,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigateByUrl('/payPage');
    this.dialog.closeAll();
  }
}

