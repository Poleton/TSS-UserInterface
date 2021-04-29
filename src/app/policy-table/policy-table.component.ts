import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Policy } from "../models/policy.model";
import { RestService } from "../services/rest.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { PoliciesToolbarComponent } from '../policies-toolbar/policies-toolbar.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewSmartPolicyDialogComponent } from "../new-smart-policy-dialog/new-smart-policy-dialog.component";
@Component({
  selector: "app-policy-table",
  templateUrl: "./policy-table.component.html",
  styleUrls: ["./policy-table.component.css"]
})
export class PolicyTableComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "product",
    "duration",
    "territorialScope",
    "meansOfTransportation",
    "numSensors",
    "conditions",
    "actions"
  ];
  dataSource: Policy[] = [];

  constructor(
    private restService: RestService,
    public dialog: MatDialog
    ) {}

  /*FILTERING PENDENT
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  */
  openDialog() {
    const dialogRef = this.dialog.open(NewSmartPolicyDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit()  {
    this.restService.getPolicies()
    .subscribe(rest => this.dataSource = rest);
  }

}
