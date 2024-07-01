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
import { ClientData } from '../../../../../core/interfaces/client.interface';
import { BadgeInfoComponent } from '../../../../../shared/components/badge-info/badge-info.component';

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
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent implements OnChanges {
  public data = input<ClientData>({} as ClientData);
  public columns = input<Column[]>([]);
  public loading = input<boolean>(true);
  public totalPage = signal<number>(0);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data()?.meta?.pagination) {
      this.updateTotalPages();
    }
  }

  private updateTotalPages(): void {
    if (this.data()?.meta?.pagination) {
      this.totalPage.set(this.data().meta.pagination.total);
    }
  }
}
