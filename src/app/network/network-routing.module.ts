import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'fleet', loadChildren: () => import('./fleet/fleet.module').then(m => m.FleetModule) },
  { path: 'routes', loadChildren: () => import('./routes/routes.module').then(m => m.RoutesModule) },
  { path: 'warehouses', loadChildren: () => import('./warehouses/warehouses.module').then(m => m.WarehousesModule) },
  { path: '', redirectTo: 'fleet', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetworkRoutingModule { }
