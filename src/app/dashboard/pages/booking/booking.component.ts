import { Component, inject, signal } from '@angular/core';
import { DataTableComponent } from './data-table/data-table.component';
import { DataService } from '../../../core/services/data.service';
import { Booking } from '../../../core/interfaces/bookin.interface';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  private readonly bookingService = inject(DataService);

  public data = signal<Booking>({} as Booking);
  public loading = signal<boolean>(true);

  ngOnInit(): void {
    this.getBookins();
  }

  getBookins(): void {
    this.bookingService.getBookins().subscribe({
      next: (res: Booking) => {
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
      title: 'id',
    },
    {
      title: 'nombre',
    },
    {
      title: 'desde',
    },
    {
      title: 'hasta',
    },
    {
      title: 'n° habitación',
    },
    {
      title: 'tipo',
    },
    {
      title: 'socio ACA',
    },
    {
      title: 'precio',
    },
    {
      title: 'pagado',
    },
  ];
}
