import { Component, OnInit, inject, signal } from '@angular/core';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataService } from '../../../core/services/data.service';
import { Client } from '../../../core/interfaces/client.interface';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
})
export class ClientsComponent implements OnInit {
  private readonly dataService = inject(DataService);

  public data = signal<Client>({} as Client);
  public loading = signal<boolean>(true);

  ngOnInit(): void {
    this.getBookins();
  }

  getBookins(): void {
    this.dataService.getClients().subscribe({
      next: (res: Client) => {
        this.data.set(res);
        this.loading.set(false);
      },
      error: (err) => {
        console.log(err);
        this.loading.set(false);
      },
      complete: () => {
        this.loading.set(false);
      },
    });
  }

  columnsData = [
    {
      title: '#',
    },
    {
      title: 'nombre',
    },
    {
      title: 'teléfono',
    },
    {
      title: 'dirección',
    },
    {
      title: 'DNI',
    },
    {
      title: 'socio ACA',
    },
  ];
}
