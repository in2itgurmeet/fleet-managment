import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IncomingParcelsComponent } from './incoming-parcels/incoming-parcels';
import { OutgoingParcelsComponent } from './outgoing-parcels/outgoing-parcels';
import { ReturnsComponent } from './returns/returns';
import { FailedDeliveriesComponent } from './failed-deliveries/failed-deliveries';

const routes: Routes = [
  { path: 'incoming-parcels', component: IncomingParcelsComponent },
  { path: 'outgoing-parcels', component: OutgoingParcelsComponent },
  { path: 'returns', component: ReturnsComponent },
  { path: 'failed-deliveries', component: FailedDeliveriesComponent },
  { path: '', redirectTo: 'incoming-parcels', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParcelOperationsRoutingModule { }
