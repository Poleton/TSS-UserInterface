import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppMaterialModule } from "./app-material.module";
import { PolicyTableComponent } from "./policy-table/policy-table.component";
import { MatDividerModule } from "@angular/material/divider";

import { HttpClientModule } from "@angular/common/http";
import { RestService } from "./services/rest.service";
import { SmartPolicyTableComponent } from "./smart-policy-table/smart-policy-table.component";

import { ReactiveFormsModule } from "@angular/forms";
import {NewPolicyWindowComponent} from "./new-policy-window/new-policy-window.component";

@NgModule({
  declarations: [PolicyTableComponent, AppComponent, SmartPolicyTableComponent, NewPolicyWindowComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    MatDividerModule,
    ReactiveFormsModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule {}
