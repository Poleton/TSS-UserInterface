import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  name: string;
  date: string;
  condition: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Astrazeneca', date: '10/2/21', condition: 'temperature'},
  {id: 2, name: 'Pfizer', date: '10/2/21', condition: 'pressure'},
  {id: 3, name: 'Moderna', date: '10/2/21', condition: 'db'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'date', 'condition'];
  dataSource = ELEMENT_DATA;
  
  ngOnInit(): void {
  }

}
