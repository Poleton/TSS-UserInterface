import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataTableModule } from "angular-4-data-table-bootstrap-4";
import {ChuckModule} from "./chuck.module"
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    ChuckModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
