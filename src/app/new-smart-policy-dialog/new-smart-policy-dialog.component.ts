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

  levelDepthT: any;
  levelMinimumRangeT:any;
  levelMaximumRangeT:any;
  percentualWeightT:any;

  levelDepthP: any;
  levelMinimumRangeP:any;
  levelMaximumRangeP:any;
  percentualWeightP:any;

  levelDepthA: any;
  levelMinimumRangeA:any;
  levelMaximumRangeA:any;
  percentualWeightA:any;

  levelDepthH: any;
  levelMinimumRangeH:any;
  levelMaximumRangeH:any;
  percentualWeightH:any;

  temperature:any;
  pressure:any;
  acceleration:any;
  humidity:any;

  constructor(
    //public id: number,
    private http: HttpClient,
    private restService: RestService,
    private dialogRef: MatDialogRef<NewSmartPolicyDialogComponent>
  ) {}

  ngOnInit(): void {
  }

  onSubmit() {
    let sensors:string = "    \"sensors\": { \n"
    if(this.temperature){
      sensors = sensors.concat("        \"temperature\": { \"levelDepth\": \""+this.levelDepthT+"\", \"levelMinimumRange\": \""+this.levelMinimumRangeT+"\", \"levelMaximumRange\": \""+this.levelMaximumRangeT+"\", \"percentualWeight\": \""+this.percentualWeightT+"\" },\n" )
    }
    if(this.pressure){
      sensors = sensors.concat("        \"pressure\": { \"levelDepth\": \""+this.levelDepthP+"\", \"levelMinimumRange\": \""+this.levelMinimumRangeP+"\", \"levelMaximumRange\": \""+this.levelMaximumRangeP+"\", \"percentualWeight\": \""+this.percentualWeightP+"\" },\n" )
    }
    if(this.acceleration){
      sensors = sensors.concat("        \"acceleration\": { \"levelDepth\": \""+this.levelDepthA+"\", \"levelMinimumRange\": \""+this.levelMinimumRangeA+"\", \"levelMaximumRange\": \""+this.levelMaximumRangeA+"\", \"percentualWeight\": \""+this.percentualWeightA+"\" },\n" )
    }
    if(this.humidity){
      sensors = sensors.concat("        \"humidity\": { \"levelDepth\": \""+this.levelDepthH+"\", \"levelMinimumRange\": \""+this.levelMinimumRangeH+"\", \"levelMaximumRange\": \""+this.levelMaximumRangeH+"\", \"percentualWeight\": \""+this.percentualWeightH+"\" },\n" )
    }
    sensors = sensors.substr(0,sensors.length-2)
    sensors = sensors.concat("    }\n" )

    let text: string = "{\n" +
      "    \"policyId\": \""+this.policyId+"\",\n" +
      "    \"shipmentID\": \""+"0"+"\",\n" +
      "    \"shipmentLiability\": \""+this.shipmentLiability+"\",\n" +
      sensors +
      "}"
    console.warn("mapa sensors",text);
    console.warn("temp",sensors)
    this.restService.postSmartPolicy(text).subscribe((result) => {
      console.warn('result', result);
    });

    console.warn("mapa sensors",text);
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
