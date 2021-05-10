import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PolicyTableComponent } from './policy-table/policy-table.component';
import { SmartPolicyTableComponent } from './smart-policy-table/smart-policy-table.component';
import { ViewDetailsDialogComponent } from './view-details-dialog/view-details-dialog.component';

const routes: Routes = [
  {path:'smartpolicy-details', component: ViewDetailsDialogComponent },
  {path:'smartpolicy-table', component: SmartPolicyTableComponent },
  {path:'policy-table', component: PolicyTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

