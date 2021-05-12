import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SmartPolicy } from './models/smartPolicy.model';
import { PolicyTableComponent } from './policy-table/policy-table.component';
import { SmartPolicyTableComponent } from './smart-policy-table/smart-policy-table.component';
import { ViewDetailsDialogComponent } from './view-details-dialog/view-details-dialog.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [ 
  {path:'home', component: HomeComponent },
  {path:'view-details', component: ViewDetailsComponent}, 
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

