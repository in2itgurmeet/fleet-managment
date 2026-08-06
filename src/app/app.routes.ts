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
      { path: 'shipments', loadChildren: () => import('./logistics/shipment/shipment.module').then(m => m.ShipmentModule) },
      { path: 'customers', loadChildren: () => import('./people/customers/customers.module').then(m => m.CustomersModule) },
      { path: 'riders-drivers', loadChildren: () => import('./people/riders-drivers/riders-drivers.module').then(m => m.RidersDriversModule) },
      { path: 'fleet', loadChildren: () => import('./network/fleet/fleet.module').then(m => m.FleetModule) },
      { path: 'routes', loadChildren: () => import('./network/routes/routes.module').then(m => m.RoutesModule) },
      { path: 'warehouses', loadChildren: () => import('./network/warehouses/warehouses.module').then(m => m.WarehousesModule) },
      { path: 'payments', loadChildren: () => import('./finance/payments/payments.module').then(m => m.PaymentsModule) },
      { path: 'reports', loadChildren: () => import('./finance/reports/reports.module').then(m => m.ReportsModule) },
      { path: 'settings', loadComponent: () => import('./system/settings/settings').then(c => c.Settings) },
      { path: 'support', loadComponent: () => import('./system/support/support').then(c => c.Support) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'auth' }
];
