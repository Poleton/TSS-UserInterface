import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatDividerModule } from "@angular/material/divider";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     MatTabsModule, 
     MatTableModule, 
     MatDividerModule, 
     MatToolbarModule, 
     MatIconModule, 
     MatButtonModule, 
     MatFormFieldModule,
     MatDialogModule,
     FormsModule
    ],
  exports: [
    CommonModule, 
    MatTabsModule, 
    MatTableModule, 
    MatDividerModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    MatFormFieldModule,
    MatDialogModule,
    FormsModule
  ]
})
export class AppMaterialModule {}
