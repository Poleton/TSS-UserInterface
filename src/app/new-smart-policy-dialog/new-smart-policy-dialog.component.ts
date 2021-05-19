import { Component, EventEmitter, OnInit } from '@angular/core';
import {  MatDialog,  MatDialogRef,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../services/rest.service';
import { Sensor } from '../models/sensor.model';

@Component({
  selector: 'app-new-smart-policy-dialog',
  templateUrl: './new-smart-policy-dialog.component.html',
  styleUrls: ['./new-smart-policy-dialog.component.css'],
})
export class NewSmartPolicyDialogComponent implements OnInit {
  id!: number;
  sensors!: Sensor[];
  policyId: any;
  shipmentId: any;
  shipmentLiability:any;

  constructor(
    //public id: number,
    private http: HttpClient,
    private restService: RestService,
    private dialogRef: MatDialogRef<NewSmartPolicyDialogComponent>
  ) {}

  ngOnInit(): void {
  }

  onSubmit() {
   /* this.restService.postSmartPolicy(data).subscribe((result) => {
      console.warn('result', result);
    }); */
    console.warn("fff",this.policyId);
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
