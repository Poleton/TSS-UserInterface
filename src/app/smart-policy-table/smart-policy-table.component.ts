import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Alert } from '../models/alert.model';
import { SmartPolicy } from '../models/smartPolicy.model';
import { RestService } from '../services/rest.service';
import { ViewDetailsComponent } from '../view-details/view-details.component';

@Component({
  selector: 'app-smart-policy-table',
  template: ` <view-details-component></view-details-component> `,
  templateUrl: './smart-policy-table.component.html',
  styleUrls: ['./smart-policy-table.component.css'],
})
export class SmartPolicyTableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'product',
    'description',
    'holderName',
    'duration',
    'details',
  ];
  dataSource: SmartPolicy[] = [];
  dialog: any;
  alerts: Alert[] = [];

  hasNewAlerts = new Map<number, number>();
  newAlertsMap = new Map<number, number>();

  constructor(
    private restService: RestService,
    public detailsDialog: MatDialog,
    private router: Router
  ) {}

  
  updateAlertsMap(spId: number, newAlertId: number) {
    this.newAlertsMap.set(spId, newAlertId);
  }

  openDetails(smartPolicy: SmartPolicy, id: number) {
    this.router.navigateByUrl('view-details', {
      state: { smart: smartPolicy },
    });
  }

  public refresh() {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.restService
      .getSmartPolicies()
      .subscribe((rest) => (this.dataSource = rest));

    console.warn(this.newAlertsMap.size);
    if (this.newAlertsMap.size != 0) {
      let newAlerts: string = '{\n';
      this.newAlertsMap.forEach((value: number, key: number) => {
        newAlerts = newAlerts.concat('"' + key + '": "' + value + '",');
      });
      newAlerts = newAlerts.substr(0, newAlerts.length - 2);
      newAlerts = newAlerts.concat('    }\n');

      this.restService
        .postHasNewAlert(newAlerts)
        .subscribe((result) => (this.hasNewAlerts = result));
    }
  }
}
