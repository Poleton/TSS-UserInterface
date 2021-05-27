import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Policy } from "../models/policy.model";
import { RestService } from "../services/rest.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { PoliciesToolbarComponent } from "../policies-toolbar/policies-toolbar.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { NewSmartPolicyDialogComponent } from "../new-smart-policy-dialog/new-smart-policy-dialog.component";
import { LoginComponent } from "../login/login.component";
@Component({
  selector: "app-policy-table",
  templateUrl: "./policy-table.component.html",
  styleUrls: ["./policy-table.component.css"]
})
export class PolicyTableComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "policyName",
    "policyHolderCIF",
    "policyHolderName",
    "territorialScope",
    "contractPremium",
    "contractLiability",
    "expiryTimestamp",
    "inceptionTimestamp",
    "actions"
  ];
  //dataSource: Policy[] = [];
  //dataSource= new MatTableDataSource<Policy>([]);
  dataSource:Policy[]=[]
  constructor(private restService: RestService, public dialog: MatDialog) {}

  /*FILTERING PENDENT
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  */
  openDialog(id_item: number) {
    const dialogRef = this.dialog.open(NewSmartPolicyDialogComponent, {
      data:{
        id: id_item
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  public refresh(){
    this.restService.getPolicies().subscribe(rest => (this.dataSource= rest))
  }

  ngOnInit() {
    this.restService.getPolicies().subscribe(rest => (this.dataSource= rest))
  }
}
