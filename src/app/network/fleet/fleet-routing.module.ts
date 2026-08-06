import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Vehicles } from './vehicles/vehicles';
import { VehicleMaintenance } from './vehicle-maintenance/vehicle-maintenance';

const routes: Routes = [
  { path: 'vehicles', component: Vehicles },
  { path: 'vehicle-maintenance', component: VehicleMaintenance },
  { path: '', redirectTo: 'vehicles', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FleetRoutingModule { }
