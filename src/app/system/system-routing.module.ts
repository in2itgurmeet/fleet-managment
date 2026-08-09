import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings').then(c => c.Settings),
    children: [
      { path: 'general', loadComponent: () => import('./settings/general/general').then(c => c.GeneralComponent) },
      { path: 'company-profile', loadComponent: () => import('./settings/company-profile/company-profile').then(c => c.CompanyProfile) },
      { path: 'notifications', loadComponent: () => import('./settings/notifications/notifications').then(c => c.Notifications) },
      { path: 'billing', loadComponent: () => import('./settings/billing/billing').then(c => c.Billing) },
      { path: 'security', loadComponent: () => import('./settings/security/security').then(c => c.Security) },
      { path: 'integrations', loadComponent: () => import('./settings/integrations/integrations').then(c => c.Integrations) },
      { path: 'delete-account', loadComponent: () => import('./settings/delete-account/delete-account').then(c => c.DeleteAccount) },
      { path: '', redirectTo: 'general', pathMatch: 'full' }
    ]
  },
  { path: 'support', loadComponent: () => import('./support/support').then(c => c.SupportComponent) },
  { path: 'profile', loadComponent: () => import('./profile/profile').then(c => c.ProfileComponent) },
  { path: '', redirectTo: 'settings', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
