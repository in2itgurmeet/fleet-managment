import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseList } from './warehouse-list/warehouse-list';
import { Inventory } from './inventory/inventory';

const routes: Routes = [
  { path: 'list', component: WarehouseList },
  { path: 'inventory', component: Inventory },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehousesRoutingModule { }
