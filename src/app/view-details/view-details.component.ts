import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SmartPolicy } from '../models/smartPolicy.model';
import { Sensor } from '../models/sensor.model';
import { Alert } from '../models/alert.model';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})

export class ViewDetailsComponent implements OnInit {

  smartPolicy!:SmartPolicy;
  sensor!: Sensor;
  alerts: Alert[] = [];

  data:any;
  constructor( private router: Router) {
    
    //console.log(this.router.getCurrentNavigation().extras.state);
   }

  ngOnInit(): void {
    this.smartPolicy=history.state.smart;
    this.sensor=history.state;
    this.alerts=history.state.alerts;
  }
  onClick(){
    this.router.navigate(['home'])
  }
}
