import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'shipments', loadChildren: () => import('./shipment/shipment.module').then(m => m.ShipmentModule) },
  { path: 'parcel-operations', loadChildren: () => import('./parcel-operations/parcel-operations.module').then(m => m.ParcelOperationsModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: '', redirectTo: 'shipments', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogisticsRoutingModule { }
