import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { PeriodicElement } from './table.interface';
import { ELEMENT_DATA } from '../mock-data';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  columns = [
    {
      columnDef: 'position',
      header: 'No.',
      cell: (element: PeriodicElement) => `${element.position}`,
    },
    {
      columnDef: 'name',
      header: 'Club',
      cell: (element: PeriodicElement) => `${element.name}`,
    },
    {
      columnDef: 'point',
      header: 'Point',
      cell: (element: PeriodicElement) => `${element.point}`,
    },
    {
      columnDef: 'lastForm',
      header: 'Last Form',
      cell: (element: PeriodicElement) => `${element.lastForm}`,
    },
  ];
  dataSource = ELEMENT_DATA;
  displayedColumns = this.columns.map(c => c.columnDef);
}
