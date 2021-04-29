import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-new-policy-dialog',
  templateUrl: './new-policy-dialog.component.html',
  styleUrls: ['./new-policy-dialog.component.css']
})
export class NewPolicyDialogComponent implements OnInit{
  constructor(private http:HttpClient,
    private dialogRef: MatDialogRef<NewPolicyDialogComponent>
    //@ Inject(MAT_DIALOG_DATA) public data: Policy
    ) {}

ngOnInit() { 
}

onSubmit(data: any){
  this.http.post('https://ce6c86ca-84fd-42bb-9343-076993ac36fa.mock.pstmn.io', data)
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
