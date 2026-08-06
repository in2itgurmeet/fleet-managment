import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Settings } from './settings/settings';
import { Support } from './support/support';

// Because we mapped both /settings and /support to load this module,
// we don't have a single base path. However, Angular router matches the remaining path.
// When loading /settings, the remaining path is ''.
// So we can check the full path or just map them properly. 
// A better way is to define it at the app routing level, but for simplicity:
const routes: Routes = [
  // If we navigated to /settings, we want Settings component.
  // Actually, we mapped /settings to this module. So inside this module, the path is relative.
  // This means the URL would be /settings/settings if we had path: 'settings'.
  // Let's just define both and in app.routes.ts we can just map them directly if needed,
  // or we can leave it as '' in this module. Wait, since it's lazy loaded on both '/settings' and '/support',
  // matching '' will load the default. We can't do that.
  // Instead, let's just make the components reachable.
  { path: '', component: Settings }, // Default if someone just hits the module
  { path: 'support', component: Support } // We will fix app.routes.ts to handle this correctly.
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
