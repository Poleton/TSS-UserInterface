import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppMaterialModule } from "./app-material.module";
import { PolicyTableComponent } from "./policy-table/policy-table.component";

import { HttpClientModule } from "@angular/common/http";
import { RestService } from "./services/rest.service";
import { SmartPolicyTableComponent } from "./smart-policy-table/smart-policy-table.component";

import { ReactiveFormsModule } from "@angular/forms";
import { PoliciesToolbarComponent} from "./policies-toolbar/policies-toolbar.component";
import { NewPolicyDialogComponent } from './new-policy-dialog/new-policy-dialog.component';
import { NewSmartPolicyDialogComponent } from './new-smart-policy-dialog/new-smart-policy-dialog.component';
import { HomeComponent } from './home/home.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { SmartPoliciesToolbarComponent } from './smart-policies-toolbar/smart-policies-toolbar.component';

@NgModule({
  declarations: [
     AppComponent, 
     PolicyTableComponent, 
     SmartPolicyTableComponent, 
     PoliciesToolbarComponent, 
     NewPolicyDialogComponent,
     NewSmartPolicyDialogComponent,
     HomeComponent,
     ViewDetailsComponent,
     TopBarComponent,
     LoginComponent,
     SmartPoliciesToolbarComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RestService, SmartPolicyTableComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
