import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SmartPolicy } from '../models/smartPolicy.model';
import { RestService } from '../services/rest.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-details-dialog',
  templateUrl: './view-details-dialog.component.html',
  styleUrls: ['./view-details-dialog.component.css']
})
export class ViewDetailsDialogComponent implements OnInit {
  smartPolicy!: SmartPolicy;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private restService: RestService,
    private dialogRef: MatDialogRef<ViewDetailsDialogComponent>) { }

  ngOnInit(): void {
    /*this.restService.getSmartPolicy(1)
    .subscribe(rest => this.smartPolicy = rest);*/
  }
  
  onClick(){
  }

  close() {
    this.dialogRef.close();
  }

}
