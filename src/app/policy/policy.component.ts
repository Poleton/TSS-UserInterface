import { Component, OnInit } from '@angular/core';
import { RestService, Policy } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  policies : Policy[] = [];

  constructor(public rest: RestService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPolicies();
    
  }

  getPolicies(): void {
    this.rest.getPolicies().subscribe((resp: any) => {
      this.policies = resp;
      console.log(this.policies);
    });
  }

}
