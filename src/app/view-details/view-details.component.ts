import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SmartPolicy } from '../models/smartPolicy.model';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  smartPolicy!:SmartPolicy;
  data:any;
  constructor(private activatedroute:ActivatedRoute, private router: Router) {
    //console.log(this.router.getCurrentNavigation().extras.state);
   }

  ngOnInit(): void {
    /*this.activatedroute.data.subscribe(data => {
      this.smartpolicy=data;
  }) */
    this.smartPolicy=history.state;
  }

  onClick(){
    this.router.navigate(['home'])
  }
}
