import { Component, OnInit } from '@angular/core';
import { SmartPolicyTableComponent } from '../smart-policy-table/smart-policy-table.component';

@Component({
  selector: 'app-smart-policies-toolbar',
  templateUrl: './smart-policies-toolbar.component.html',
  styleUrls: ['./smart-policies-toolbar.component.css']
})
export class SmartPoliciesToolbarComponent implements OnInit {

  constructor(private smartPolicyTable: SmartPolicyTableComponent) { }

  ngOnInit(): void {
  }
  
  public refresh_(){
    this.smartPolicyTable.refresh()
  }
}
