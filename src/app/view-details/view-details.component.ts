import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SmartPolicy } from '../models/smartPolicy.model';
import { Sensor } from '../models/sensor.model';
import { Alert } from '../models/alert.model';
import { SensorEvent } from '../models/sensorEvent.model';
import { RestService } from '../services/rest.service';
import { SmartPolicyTableComponent } from '../smart-policy-table/smart-policy-table.component';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css'],
})
export class ViewDetailsComponent implements OnInit {
  //@Output() messageEvent = new EventEmitter<number[]>();

  smartPolicy!: SmartPolicy;
  alerts: Alert[] = [];
  data: any;

  constructor(
    private restService: RestService,
    private router: Router,
    private smartPolicyTableComponent: SmartPolicyTableComponent
  ) {}

  // sp= this.smartPolicyTableComponent.dialog;

  getAlertsSmart(id: number) {
    //this.restService.getAlerts(id).subscribe((rest) => (this.alerts = rest));
    this.restService.getAlerts(id)
      .toPromise()
      .then(
        (res) => {
          this.alerts = res
          let alertId: number = 0;
          for(let i: number = 0; i < this.alerts.length; i++){
            if (alertId < this.alerts[i].id) {
              alertId = this.alerts[i].id;
            }
          }
          console.warn(alertId)
          this.smartPolicyTableComponent.updateAlertsMap(this.smartPolicy.id, alertId);
        },
        (error) => {
          this.smartPolicyTableComponent.updateAlertsMap(this.smartPolicy.id, 0);
         })
  }

  typeToName(id:any): string{
    let name:string =""
    switch(id){
      case 1: name="TEMPERATURE"
      break
      case 2: name="PRESSURE"
      break
      case 3: name="ACCELERATION"
      break
      case 4: name="HUMIDITY"
      break
    }
    return name
  }
  
  ngOnInit(): void {
    this.smartPolicy = history.state.smart;
    // this.sensor=history.state;
    this.getAlertsSmart(this.smartPolicy.id);
    //Funcion a crear en la smart tables que inyectamos aquí(a traves de la sp i la last alert) que haga un put en el map de alertas
    //->Si está en la lista la sobreescribe
    
  }
  onClick() {
    this.router.navigate(['home']);
  }
}
