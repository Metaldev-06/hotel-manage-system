import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((m) => m.DashboardRoutes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
