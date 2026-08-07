import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryReportsComponent } from './delivery-reports/delivery-reports';
import { RevenueReportsComponent } from './revenue-reports/revenue-reports';
import { RiderReportsComponent } from './rider-reports/rider-reports';

const routes: Routes = [
  { path: 'delivery', component: DeliveryReportsComponent },
  { path: 'revenue', component: RevenueReportsComponent },
  { path: 'riders', component: RiderReportsComponent },
  { path: '', redirectTo: 'delivery', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
