import { Component, OnInit } from '@angular/core';
import { NewPolicyDialogComponent } from '../new-policy-dialog/new-policy-dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Policy } from '../models/policy.model';

@Component({
  selector: 'app-policies-toolbar',
  templateUrl: './policies-toolbar.component.html',
  styleUrls: ['./policies-toolbar.component.css']
})
export class PoliciesToolbarComponent implements OnInit {

  //datos: Policy[]=[];

  ngOnInit() {

  }
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(NewPolicyDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

