import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SmartPolicy } from '../models/smartPolicy.model';
import { RestService } from '../services/rest.service';
import { ViewDetailsDialogComponent } from '../view-details-dialog/view-details-dialog.component';

@Component({
  selector: 'app-smart-policy-table',
  templateUrl: './smart-policy-table.component.html',
  styleUrls: ['./smart-policy-table.component.css']
})
export class SmartPolicyTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'product', 'description', 'holderName', 'mailAdress', 'duration', 'details'];
  dataSource : SmartPolicy[] = [];
  dialog: any;

  constructor(private restService: RestService, public detailsDialog: MatDialog) { }

  ngOnInit(): void {
    this.restService.getSmartPolicies()
    .subscribe(rest => this.dataSource = rest);
   
  }
  openDetailsDialog(smartPolicy: SmartPolicy){
    
    const dialogRef = this.detailsDialog.open(ViewDetailsDialogComponent, { 
      data: { 
        smartPolicy
      }
    });
    //para testear que se pasa la smartpolicy correctamente
    console.log(smartPolicy)
  }

}
