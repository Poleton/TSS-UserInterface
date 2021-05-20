import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SmartPolicy } from '../models/smartPolicy.model';
import { Sensor } from '../models/sensor.model';
import { Alert } from '../models/alert.model';
import { SensorEvent } from '../models/sensorEvent.model';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})

export class ViewDetailsComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<number[]>();

  smartPolicy!: SmartPolicy;
  alerts: Alert[] = [];
  data:any;

  constructor(private restService: RestService, private router: Router) {  }

  getAlertsSmart(id:number){
    this.restService.getAlerts(id).subscribe((rest) => this.alerts = rest)
    let alertId: number = 0;
    this.alerts.forEach(function(value: Alert){
      if (alertId < value.id){
        alertId = value.id;
      }
    })
    let ids: number[] = [this.smartPolicy.id, alertId]
    this.messageEvent.emit(ids);
  }


  ngOnInit(): void {
    // aqui una vez con la alerta mapear los eventos en el sensorEvent y añadimos el tipo (temperature,...) que esta en el fck map de alerts
    // y en el html recorremos con un ngFor el sensorEvent
    this.smartPolicy = history.state.smart;
    // this.sensor=history.state;
    this.getAlertsSmart(this.smartPolicy.id)
  }
  onClick(){
    this.router.navigate(['home'])



  }
}
