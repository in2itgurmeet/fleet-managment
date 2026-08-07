import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiderListComponent } from './rider-list/rider-list';
import { DriverTracking } from './driver-tracking/driver-tracking';
import { PerformanceComponent } from './performance/performance';

const routes: Routes = [
  { path: 'riders', component: RiderListComponent },
  { path: 'tracking', component: DriverTracking },
  { path: 'performance', component: PerformanceComponent },
  { path: '', redirectTo: 'riders', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RidersDriversRoutingModule { }
