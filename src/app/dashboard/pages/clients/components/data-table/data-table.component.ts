import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  input,
  signal,
} from '@angular/core';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { TitleCasePipe } from '@angular/common';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { BadgeInfoComponent } from '../../../../../shared/components/badge-info/badge-info.component';
import { Client } from '../../../../../core/interfaces/client.interface';
import { NzIconModule } from 'ng-zorro-antd/icon';

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
    BadgeInfoComponent,
    NzIconModule,
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent implements OnInit {
  public data = input<Client>({} as Client);
  public columns = input<Column[]>([]);
  public loading = input<boolean>(true);
  public totalPage = signal<number>(0);

  ngOnInit(): void {}
}
