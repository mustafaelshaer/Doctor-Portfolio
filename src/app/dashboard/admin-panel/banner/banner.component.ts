import { Component,OnInit  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  displayedColumns: string[] = ['id', 'name', 'age']; // Columns to display
  dataSource = new MatTableDataSource<AnyData>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.getData();
  }

  getData() {
    const data: AnyData[] = [
      { id: 1, name: 'John', age: 25 },
      { id: 2, name: 'Jane', age: 28 },
      { id: 3, name: 'Sam', age: 22 },
      { id: 4, name: 'Alice', age: 30 },
      { id: 5, name: 'Bob', age: 35 },
      // Add more sample data here
    ];

    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }
}
export interface AnyData {
  id: number;
  name: string;
  age: number;
}

