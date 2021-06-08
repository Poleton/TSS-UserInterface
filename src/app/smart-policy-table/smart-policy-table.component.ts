import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Alert } from '../models/alert.model';
import { SmartPolicy } from '../models/smartPolicy.model';
import { RestService } from '../services/rest.service';
import { ViewDetailsComponent } from '../view-details/view-details.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-smart-policy-table',
  template: ` <view-details-component></view-details-component> `,
  templateUrl: './smart-policy-table.component.html',
  styleUrls: ['./smart-policy-table.component.css'],
})
export class SmartPolicyTableComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'product',
    'contractAddress',
    'holderName',
    'shipmentId',
    'details',
    'state',
    'deactivationButton'
  ];
  dataSource: SmartPolicy[] = [];
  dialog: any;
  alerts: Alert[] = [];

  static hasNewAlerts = new Map<number, number>();
  static newAlertsMap = new Map<number, number>();

  public classReference = SmartPolicyTableComponent;

  constructor(
    private restService: RestService,
    public detailsDialog: MatDialog,
    private router: Router
  ) {}

  public deactivate(smartId:number){
    this.restService.getDeactivate(smartId)
    .toPromise()
    .then(
      (res) => {
        this.ngOnInit()
      },
      (error) => {
        //error
      }
    )
  }

  public deactivateDisabled(state:any) {
    let disable:boolean
    if(state == "ACTIVATED"){
      disable = false
    } else ( disable = true )
    return disable
  }

  public getAlertsNumber(spId: number) {
    if (SmartPolicyTableComponent.hasNewAlerts && SmartPolicyTableComponent.hasNewAlerts.get(spId) != 0){
      return SmartPolicyTableComponent.hasNewAlerts.get(spId)
    }else{
      return null;
    }
  }
  
  updateAlertsMap(spId: number, newAlertId: number) {
    console.warn(newAlertId)
    SmartPolicyTableComponent.newAlertsMap.set(spId, newAlertId);
    console.warn(SmartPolicyTableComponent.newAlertsMap)
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
    this.restService.getSmartPolicies()
      .toPromise()
      .then(
        (res) => {
          this.dataSource = res

          console.warn(this.dataSource.length)
          
          console.warn("segundo: "+ SmartPolicyTableComponent.newAlertsMap.size)
          for(let i: number = 0; i < this.dataSource.length; i++){
            console.warn("primero: "+!SmartPolicyTableComponent.newAlertsMap.has(this.dataSource[i].id))
            if (!SmartPolicyTableComponent.newAlertsMap.has(this.dataSource[i].id)){
              SmartPolicyTableComponent.newAlertsMap.set(this.dataSource[i].id, 0)
            }
          }

          let newAlerts: string = '{';
          SmartPolicyTableComponent.newAlertsMap.forEach((value: number, key: number) => {
            newAlerts = newAlerts.concat('"' + key + '": "' + value + '",');
          });
          newAlerts = newAlerts.substr(0, newAlerts.length - 1);
          newAlerts = newAlerts.concat('}');

          console.warn(newAlerts)
          this.restService
            .postHasNewAlert(newAlerts)
            .pipe(
              map((response: number[]) => {
                  let toReturn = new Map<number, number>();
                  SmartPolicyTableComponent.newAlertsMap.forEach((value: number, key: number) => {
                    toReturn.set(key, response[key]);
                  });
                  return toReturn;
              })
          ).subscribe((data: Map<number, number>) => {SmartPolicyTableComponent.hasNewAlerts = data});
        
        },
        (error) => {
          //error
        })

  }    
}