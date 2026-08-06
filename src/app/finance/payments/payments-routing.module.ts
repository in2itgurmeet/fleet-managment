import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Transactions } from './transactions/transactions';
import { CodManagement } from './cod-management/cod-management';
import { Invoices } from './invoices/invoices';

const routes: Routes = [
  { path: 'transactions', component: Transactions },
  { path: 'cod-management', component: CodManagement },
  { path: 'invoices', component: Invoices },
  { path: '', redirectTo: 'transactions', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
