import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesComponent } from './vehicles/vehicles';
import { VehicleMaintenanceComponent } from './vehicle-maintenance/vehicle-maintenance';

const routes: Routes = [
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'vehicle-maintenance', component: VehicleMaintenanceComponent },
  { path: '', redirectTo: 'vehicles', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FleetRoutingModule { }
