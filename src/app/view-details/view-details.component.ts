import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SmartPolicy } from '../models/smartPolicy.model';
import { Sensor } from '../models/sensor.model';
import { Alert } from '../models/alert.model';
import { SensorEvent } from '../models/sensorEvent.model'
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})

export class ViewDetailsComponent implements OnInit {

  smartPolicy!:SmartPolicy;
  //sensor!: Sensor;
  alerts: Alert[] = [];
  data:any;


  constructor( private router: Router) {

    //console.log(this.router.getCurrentNavigation().extras.state);
   }

  ngOnInit(): void {
    //aqui una vez con la alerta mapear los eventos en el sensorEvent y añadimos el tipo (temperature,...) que esta en el fck map de alerts
    //y en el html recorremos con un ngFor el sensorEvent
    this.smartPolicy=history.state.smart;
    //this.sensor=history.state;
    this.alerts=history.state.alerts;
  }
  onClick(){
    this.router.navigate(['home'])
  }
}
