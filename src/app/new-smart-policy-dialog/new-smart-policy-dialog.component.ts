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
  constructor(
    //public id: number,
    private http: HttpClient,
    private restService: RestService,
    private dialogRef: MatDialogRef<NewSmartPolicyDialogComponent>
  ) {}

  ngOnInit(): void {
    ///PROVA SENSORS///
    /*    this.sensors = [
      {
        id:1,
        sensorName: "Temperature",
        checked!: false,

        levelDepth!: 1,
        levelMinimumRange!: -10,
        levelMaximumRange!: 20,
        percentualWeight!: 20

      },
      {
        id:2,
        sensorName: "Pressure",
        checked!: false,

        levelDepth!: 2,
        levelMinimumRange!: -20,
        levelMaximumRange!: 30,
        percentualWeight!: 40

      }
    ];
  }
  get selectedCheckboxList() {
    return this.sensors.filter(item => item.checked);
  }
*/
    /////////////////////////////////////////////////////
  }

  

  onSubmit(data: any) {
    this.restService.postSmartPolicy(data).subscribe((result) => {
      console.warn('result', result);
    });
    console.warn(data);
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
