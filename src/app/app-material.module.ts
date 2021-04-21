import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table'
import {MatTabsModule} from '@angular/material/tabs';
import { TableComponent } from './table/table.component'
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatDividerModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatDividerModule,
    HttpClientModule,
  ]

})
export class AppMaterialModule { }
