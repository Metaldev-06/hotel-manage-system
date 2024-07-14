import { Component, input } from '@angular/core';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { Booking } from '../../../../core/interfaces/bookin.interface';
import { BadgeInfoComponent } from '../../../../shared/components/badge-info/badge-info.component';

interface Column {
  title: string;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
    NzTableModule,
    NzDividerModule,
    TitleCasePipe,
    ButtonComponent,
    DatePipe,
    CurrencyPipe,
    BadgeInfoComponent,
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent {
  public data = input.required<Booking>();
  public columns = input<Column[]>([]);
  public loading = input<boolean>(true);
}
