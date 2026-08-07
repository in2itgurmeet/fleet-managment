import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  NewOrdersComponent } from './new-orders/new-orders';
import { ProcessingOrdersComponent } from './processing-orders/processing-orders';
import { CompletedOrdersComponent } from './completed-orders/completed-orders';
import { AllOrdersComponent } from './all-orders/all-orders';

const routes: Routes = [
  { path: 'all-orders', component: AllOrdersComponent },
  { path: 'new-orders', component: NewOrdersComponent },
  { path: 'processing-orders', component: ProcessingOrdersComponent },
  { path: 'completed-orders', component: CompletedOrdersComponent },
  { path: '', redirectTo: 'all-orders', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
