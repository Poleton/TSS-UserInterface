import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { HttpClient } from '@angular/common/http';

import { RestService } from "../services/rest.service";

@Component({
  selector: 'app-new-smart-policy-dialog',
  templateUrl: './new-smart-policy-dialog.component.html',
  styleUrls: ['./new-smart-policy-dialog.component.css']
})
export class NewSmartPolicyDialogComponent implements OnInit {
  id!: number;
  constructor(
    //public id: number,
    private http: HttpClient,
    private restService: RestService,
    private dialogRef: MatDialogRef<NewSmartPolicyDialogComponent>) { }

  ngOnInit(): void {
  }
  onSubmit(data: any){
    
    //this.http.post('https://ce6c86ca-84fd-42bb-9343-076993ac36fa.mock.pstmn.io', data)
    this.restService.postPolicy(data)
    .subscribe((result)=>{
      console.warn("result", result)
    })
    console.warn(data)
    this.dialogRef.close();
  }
  close() {
      this.dialogRef.close();
  }
}
