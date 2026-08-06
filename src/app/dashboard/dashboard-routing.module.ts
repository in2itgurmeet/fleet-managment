import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// We no longer need DashboardLayout here since it's now a shell in app.routes.ts
// We'll just define the dashboard overview component here when we build it.
// For now, it's just an empty route.
const routes: Routes = [
  { path: '', children: [] } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
