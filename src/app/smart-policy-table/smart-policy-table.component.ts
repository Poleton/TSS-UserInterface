import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Alert } from '../models/alert.model';
import { SmartPolicy } from '../models/smartPolicy.model';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-smart-policy-table',
  templateUrl: './smart-policy-table.component.html',
  styleUrls: ['./smart-policy-table.component.css']
})
export class SmartPolicyTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'product', 'description', 'holderName', 'sensors', 'duration', 'details'];
  dataSource : SmartPolicy[] = [];
  dialog: any;
  alerts: Alert[] =[];
  map = new Map();

  constructor(private restService: RestService, public detailsDialog: MatDialog, private router: Router) { }

  
  openDetails(smartPolicy:SmartPolicy, id:number){
    this.router.navigateByUrl('view-details', {state: {smart: smartPolicy, alerts: this.map.get(id)}})
    this.map.delete(id)
  }

  getAlertsSmart(id:number){
    this.restService.getAlerts(id).subscribe((rest) => this.alerts = rest)
    this.map.set(id, this.alerts);
    return this.alerts
  }

  public refresh(){
    this.restService.getSmartPolicies().subscribe(rest => this.dataSource = rest);
  }
  
  ngOnInit(): void {
    this.restService.getSmartPolicies().subscribe(rest => this.dataSource = rest);
  }
}
