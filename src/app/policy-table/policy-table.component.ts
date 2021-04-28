import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Policy } from '../models/policy.model';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-policy-table',
  templateUrl: './policy-table.component.html',
  styleUrls: ['./policy-table.component.css']
})
export class PolicyTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'date', 'condition'];
  dataSource : Policy[] = [];

  constructor(private restService: RestService) {
  }

  ngOnInit()  {
    this.restService.getPolicies()
    .subscribe(rest => this.dataSource = rest);
  }

}
