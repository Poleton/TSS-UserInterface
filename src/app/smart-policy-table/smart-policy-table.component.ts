import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SmartPolicy } from '../models/smartPolicy.model';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-smart-policy-table',
  templateUrl: './smart-policy-table.component.html',
  styleUrls: ['./smart-policy-table.component.css']
})
export class SmartPolicyTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'date', 'condition'];
  dataSource : SmartPolicy[] = [];

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.restService.getSmartPolicies()
    .subscribe(rest => this.dataSource = rest);
   
  }

}
