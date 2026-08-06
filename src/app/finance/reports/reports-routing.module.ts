import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryReports } from './delivery-reports/delivery-reports';
import { RevenueReports } from './revenue-reports/revenue-reports';
import { RiderReports } from './rider-reports/rider-reports';

const routes: Routes = [
  { path: 'delivery', component: DeliveryReports },
  { path: 'revenue', component: RevenueReports },
  { path: 'riders', component: RiderReports },
  { path: '', redirectTo: 'delivery', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
