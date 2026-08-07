import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseListComponent } from './warehouse-list/warehouse-list';
import { InventoryComponent } from './inventory/inventory';

const routes: Routes = [
  { path: 'list', component: WarehouseListComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehousesRoutingModule { }
