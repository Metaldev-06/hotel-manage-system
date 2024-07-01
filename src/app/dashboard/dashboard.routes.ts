import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.routes').then((m) => m.HomeRoutes),
        data: {
          breadcrumb: 'inicio',
        },
      },
      {
        path: 'booking',
        loadChildren: () =>
          import('./pages/booking/booking.routes').then((m) => m.BookingRoutes),
        data: {
          breadcrumb: 'reservas',
        },
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('./pages/calendar/calendar.routes').then(
            (m) => m.CalendarRoutes,
          ),
        data: {
          breadcrumb: 'calendario',
        },
      },
      {
        path: 'rooms',
        loadChildren: () =>
          import('./pages/rooms/rooms.routes').then((m) => m.RoomsRoutes),
        data: {
          breadcrumb: 'habitaciones',
        },
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('./pages/clients/clients.routes').then((m) => m.ClientsRoutes),
        data: {
          breadcrumb: 'clientes',
        },
      },
    ],
  },
];
