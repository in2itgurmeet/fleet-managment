import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions';
import { CodManagementComponent } from './cod-management/cod-management';
import { InvoicesComponent } from './invoices/invoices';

const routes: Routes = [
  { path: 'transactions', component: TransactionsComponent },
  { path: 'cod-management', component: CodManagementComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: '', redirectTo: 'transactions', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
