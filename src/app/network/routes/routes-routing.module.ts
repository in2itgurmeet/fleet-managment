import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePlanning } from './route-planning/route-planning';
import { RouteOptimization } from './route-optimization/route-optimization';

const routes: Routes = [
  { path: 'planning', component: RoutePlanning },
  { path: 'optimization', component: RouteOptimization },
  { path: '', redirectTo: 'planning', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
