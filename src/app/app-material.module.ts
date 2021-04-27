import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { PolicyTableComponent } from './policy-table/policy-table.component'
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [],
  imports: [CommonModule, MatTabsModule, MatTableModule, MatDividerModule],
  exports: [CommonModule, MatTabsModule, MatTableModule, MatDividerModule]
})
export class AppMaterialModule {}
