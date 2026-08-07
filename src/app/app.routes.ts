import { Routes } from '@angular/router';
import { DashboardLayout } from './dashboard/dashboard-layout/dashboard-layout';

export const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {
    path: '',
    component: DashboardLayout,
    children: [
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'logistics', loadChildren: () => import('./logistics/logistics.module').then(m => m.LogisticsModule) },
      { path: 'network', loadChildren: () => import('./network/network.module').then(m => m.NetworkModule) },
      { path: 'people', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule) },
      { path: 'finance', loadChildren: () => import('./finance/finance.module').then(m => m.FinanceModule) },
      { path: 'system', loadChildren: () => import('./system/system.module').then(m => m.SystemModule) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'auth' }
];
