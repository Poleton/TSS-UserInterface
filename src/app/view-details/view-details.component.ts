import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  styleUrls: ['./view-details.component.css']
})

export class ViewDetailsComponent implements OnInit,AfterViewInit {

  //@Output() messageEvent = new EventEmitter<number[]>();

  smartPolicy!: SmartPolicy;
  alerts: Alert[] = [];
  data:any;

  constructor(private restService: RestService, private router: Router) {  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  getAlertsSmart(id:number){
    this.restService.getAlerts(id).subscribe((rest) => this.alerts = rest)
    let alertId: number = 0;
    this.alerts.forEach(function(value: Alert){
      if (alertId < value.id){
        alertId = value.id;
      }
    })

    /*
    getAlertsSmart(id:number){
      this.restService.getAlerts(id).subscribe((rest) => this.alerts = rest)
      let alertId: number = 0;
      this.alerts.forEach(function(value: Alert){
        if (alertId < value.id){
          alertId = value.id;
        }
      })
    */
    //let ids: number[] = [this.smartPolicy.id, alertId] 
    //this.messageEvent.emit(ids);

  }


  ngOnInit(): void {
    
    this.smartPolicy = history.state.smart;
    // this.sensor=history.state;
    this.getAlertsSmart(this.smartPolicy.id)
  }
  onClick(){
    this.router.navigate(['home'])



  }
}
