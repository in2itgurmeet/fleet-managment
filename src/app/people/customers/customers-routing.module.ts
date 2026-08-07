import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list';
import { CustomerDetailsComponent } from './customer-details/customer-details';

const routes: Routes = [
  { path: 'list', component: CustomerListComponent },
  { path: 'details', component: CustomerDetailsComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
