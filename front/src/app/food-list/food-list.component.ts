import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit{

  place = new FormControl();
  placeList: string[] = ['Japanika', 'Aroma', 'Greg Cafe', 'Frangelico', 'Vivino', 'Hummus Bar', 'Humongous', 'BBB', 'Burger Saloon'];

  kitchen = new FormControl();
  kitchenList: string[] = ['Italian', 'Japanese', 'Israeli', 'Arabic', 'Fast Food', 'Mediterranean'];

  dishes = new FormControl();
  dishesList: string[] = ['Appetizers', 'Main Course', 'Desserts', 'Halal Food', 'Kosher Food', 'Salads', 'Sandwiches', 'Soups'];

  area = new FormControl();
  areaList: string[] = ['Jerusalem', 'North', 'Haifa', 'Centre', 'Tel Aviv', 'South', 'Judea and Samaria Area'];

  ngOnInit(): void {
  }

}