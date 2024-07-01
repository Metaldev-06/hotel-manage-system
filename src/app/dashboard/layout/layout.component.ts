import { Component } from '@angular/core';
import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';

interface MenuItem {
  title: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    TitleCasePipe,
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
    NzLayoutModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzMenuModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  isCollapsed = false;

  menuItem: MenuItem[] = [
    {
      title: 'inicio',
      link: '/',
      icon: 'dashboard',
    },
    {
      title: 'reserva',
      link: '/booking',
      icon: 'book',
    },
    {
      title: 'calendario',
      link: '/calendar',
      icon: 'calendar',
    },
    {
      title: 'habitaciones',
      link: '/rooms',
      icon: 'shop',
    },
    {
      title: 'clientes',
      link: '/clients',
      icon: 'user',
    },
  ];
}
