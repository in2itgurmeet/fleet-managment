import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerList } from './customer-list/customer-list';
import { CustomerDetails } from './customer-details/customer-details';

const routes: Routes = [
  { path: 'list', component: CustomerList },
  { path: 'details', component: CustomerDetails },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
