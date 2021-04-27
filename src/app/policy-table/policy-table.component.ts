import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Policy } from "../models/policy.model";
import { RestService } from "../services/rest.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
@Component({
  selector: "app-policy-table",
  templateUrl: "./policy-table.component.html",
  styleUrls: ["./policy-table.component.css"]
})
export class PolicyTableComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "date", "condition"];
  dataSource: Policy[] = [];

  constructor(private restService: RestService) {}
  
  /*Filtratge
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  */
  
  ngOnInit() {
    this.restService.getPolicies().subscribe(rest => (this.dataSource = rest));
  }
}
