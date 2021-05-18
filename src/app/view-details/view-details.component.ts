import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SmartPolicy } from '../models/smartPolicy.model';
import { Sensor } from '../models/sensor.model';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})

export class ViewDetailsComponent implements OnInit {

  smartPolicy!:SmartPolicy;
  sensor!: Sensor;

  data:any;
  constructor( private router: Router) {
    
    //console.log(this.router.getCurrentNavigation().extras.state);
   }

  ngOnInit(): void {
    this.smartPolicy=history.state;
    this.sensor=history.state;
  }
  onClick(){
    this.router.navigate(['home'])
  }
}
