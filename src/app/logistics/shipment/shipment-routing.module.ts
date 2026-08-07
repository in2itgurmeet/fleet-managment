import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllShipments } from './all-shipments/all-shipments';
import { CreateShipment } from './create-shipment/create-shipment';
import { ShipmentDetails } from './shipment-details/shipment-details';
import { ShipmentTrackingComponent } from './shipment-tracking/shipment-tracking';

const routes: Routes = [
  { path: 'all-shipments', component: AllShipments },
  { path: 'create-shipment', component: CreateShipment },
  { path: 'shipment-details', component: ShipmentDetails },
  { path: 'shipment-tracking', component: ShipmentTrackingComponent },
  { path: '', redirectTo: 'all-shipments', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipmentRoutingModule { }
