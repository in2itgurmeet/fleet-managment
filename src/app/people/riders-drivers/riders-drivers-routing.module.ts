import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiderList } from './rider-list/rider-list';
import { DriverTracking } from './driver-tracking/driver-tracking';
import { Performance } from './performance/performance';

const routes: Routes = [
  { path: 'riders', component: RiderList },
  { path: 'tracking', component: DriverTracking },
  { path: 'performance', component: Performance },
  { path: '', redirectTo: 'riders', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RidersDriversRoutingModule { }
