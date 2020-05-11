import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit{

  private users = ['Fabio', 'Leonardo', 'Thomas', 'Gabriele', 'Fabrizio', 'John', 'Luis', 'Kate', 'Max'];
  dataSource = new MatTableDataSource(this.users);

  ngOnInit(): void {
  }

  applyFilter(filterValue: Event) {
    const filter = (filterValue.target as HTMLInputElement).value;
    this.dataSource.filter = filter.trim().toLowerCase();
  }

}
